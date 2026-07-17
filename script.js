(() => {
  const body = document.body;
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  const closeNav = () => {
    body.classList.remove("nav-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = body.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeNav();
    });
  }

  const copyButtons = document.querySelectorAll("[data-ca]");
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const ca = button.getAttribute("data-ca");
      if (!ca) return;

      try {
        await navigator.clipboard.writeText(ca);
      } catch {
        const area = document.createElement("textarea");
        area.value = ca;
        area.setAttribute("readonly", "");
        area.style.position = "absolute";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
      }

      button.classList.add("copied");
      const value = button.querySelector(".value");
      const previous = value ? value.textContent : "";
      if (value) value.textContent = "Copied";

      window.setTimeout(() => {
        button.classList.remove("copied");
        if (value) value.textContent = previous;
      }, 1400);
    });
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const glow = document.querySelector(".cursor-glow");
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener(
    "pointermove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true }
  );

  const moveGlow = () => {
    glowX += (mouseX - glowX) * 0.09;
    glowY += (mouseY - glowY) * 0.09;
    if (glow) glow.style.translate = `${glowX}px ${glowY}px`;
    window.requestAnimationFrame(moveGlow);
  };
  moveGlow();

  const parallaxItems = document.querySelectorAll("[data-parallax]");
  let scrollY = window.scrollY;
  let parallaxTicking = false;

  const updateParallax = () => {
    parallaxItems.forEach((item) => {
      const speed = Number(item.getAttribute("data-parallax")) || 0.05;
      const rect = item.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
      item.style.translate = `0 ${distance * -speed}px`;
    });
    parallaxTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
      if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    },
    { passive: true }
  );
  void scrollY;
  updateParallax();

  const memeShowcase = document.getElementById("meme-showcase");
  if (memeShowcase) {
    const memeButtons = [...memeShowcase.querySelectorAll(".meme-thumb")];
    const memeImage = document.getElementById("meme-feature-image");
    const memeNumber = document.getElementById("meme-feature-number");
    const memeTitle = document.getElementById("meme-feature-title");
    const memeDescription = document.getElementById("meme-feature-description");
    const memeProgress = document.getElementById("meme-progress-bar");
    let memeIndex = 0;
    let memeTimer;

    const restartMemeProgress = () => {
      if (!memeProgress) return;
      memeProgress.style.animation = "none";
      void memeProgress.offsetWidth;
      memeProgress.style.animation = "";
    };

    const selectMeme = (index) => {
      const button = memeButtons[index];
      if (!button || !memeImage) return;

      memeIndex = index;
      memeButtons.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === memeIndex);
      });
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

      memeImage.classList.add("is-changing");
      window.setTimeout(() => {
        memeImage.src = button.dataset.image || "";
        memeImage.alt = button.dataset.alt || "";
        if (memeNumber) memeNumber.textContent = button.dataset.number || "";
        if (memeTitle) memeTitle.textContent = button.dataset.title || "";
        if (memeDescription) memeDescription.textContent = button.dataset.description || "";
        memeImage.classList.remove("is-changing");
      }, 220);
      restartMemeProgress();
    };

    const startMemeTimer = () => {
      window.clearInterval(memeTimer);
      memeTimer = window.setInterval(() => {
        selectMeme((memeIndex + 1) % memeButtons.length);
      }, 7000);
    };

    memeButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        selectMeme(index);
        startMemeTimer();
      });
    });

    memeShowcase.addEventListener("mouseenter", () => window.clearInterval(memeTimer));
    memeShowcase.addEventListener("mouseleave", startMemeTimer);
    startMemeTimer();
  }

  const canvas = document.getElementById("particle-field");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canvas && !reduceMotion) {
    const context = canvas.getContext("2d");
    const particles = [];
    const particleCount = Math.min(90, Math.floor(window.innerWidth / 16));
    let width = 0;
    let height = 0;
    let ratio = 1;

    const resizeCanvas = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const resetParticle = (particle, initial = false) => {
      particle.x = Math.random() * width;
      particle.y = initial ? Math.random() * height : height + 20;
      particle.size = Math.random() * 1.7 + 0.25;
      particle.speed = Math.random() * 0.45 + 0.12;
      particle.drift = (Math.random() - 0.5) * 0.18;
      particle.alpha = Math.random() * 0.55 + 0.15;
      particle.phase = Math.random() * Math.PI * 2;
    };

    resizeCanvas();
    for (let index = 0; index < particleCount; index += 1) {
      const particle = {};
      resetParticle(particle, true);
      particles.push(particle);
    }

    const renderParticles = (time) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.x += particle.drift + Math.sin(time * 0.0005 + particle.phase) * 0.08;
        if (particle.y < -20 || particle.x < -30 || particle.x > width + 30) {
          resetParticle(particle);
        }

        const glowSize = particle.size * 5;
        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        );
        gradient.addColorStop(0, `rgba(212, 255, 0, ${particle.alpha})`);
        gradient.addColorStop(1, "rgba(212, 255, 0, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        context.fill();
      });
      window.requestAnimationFrame(renderParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    window.requestAnimationFrame(renderParticles);
  }
})();
