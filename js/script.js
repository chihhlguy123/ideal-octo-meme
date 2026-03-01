document.addEventListener("DOMContentLoaded", function () {
  const xScreen = document.getElementById("xVerificationScreen");
  const xLogoContainer = document.getElementById("xLogoContainer");
  const xLogo = document.getElementById("xLogo");
  const xLoadingText = document.getElementById("xLoadingText");
  const xSafeContent = document.getElementById("xSafeContent");
  const xProgressFill = document.getElementById("xProgressFill");
  const mainWrapper = document.querySelector(".main-wrapper");
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 2;
    if (xProgressFill) {
      xProgressFill.style.width = progress + "%";
    }
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, 30);
  setTimeout(() => {
    if (xLogoContainer) {
      xLogoContainer.classList.remove("loading");
    }
    if (xLogo) {
      xLogo.classList.add("safe");
    }
    if (xLoadingText) {
      xLoadingText.textContent = "Verification Complete!";
    }
  }, 2000);
  setTimeout(() => {
    if (xLoadingText) {
      xLoadingText.classList.add("hidden");
    }
    if (xSafeContent) {
      xSafeContent.classList.add("visible");
    }
  }, 3000);
  setTimeout(() => {
    if (xScreen) {
      xScreen.style.opacity = "0";
      xScreen.style.pointerEvents = "none";
    }
    if (mainWrapper) {
      mainWrapper.classList.add("visible");
    }
    setTimeout(() => {
      if (xScreen) {
        xScreen.style.display = "none";
      }
    }, 500);
  }, 5500);
});
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
      const currentState = sidebar.getAttribute("data-state");
      const newState = currentState === "expanded" ? "collapsed" : "expanded";
      sidebar.setAttribute("data-state", newState);
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const watchDemoBtn = document.getElementById("watchDemo");
  const demoModal = document.getElementById("demoModal");
  const closeModal = document.getElementById("closeModal");
  const demoSteps = document.querySelectorAll(".demo-step");
  const demoDots = document.querySelectorAll(".demo-dot");
  let currentStep = 1;
  const totalSteps = 7;
  const demoConnectBtn = document.getElementById("demoConnectBtn");
  const phantomOption = document.getElementById("phantomOption");
  const approveBtn1 = document.getElementById("approveBtn1");
  const approveBtn2 = document.getElementById("approveBtn2");
  const claimBtn = document.getElementById("claimBtn");
  const demoCloseBtn = document.getElementById("demoCloseBtn");
  function openDemoModal() {
    if (demoModal) {
      demoModal.classList.add("active");
      document.body.style.overflow = "hidden";
      currentStep = 1;
      updateDemoStep();
    }
  }
  function closeDemoModalFn() {
    if (demoModal) {
      demoModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
  function updateDemoStep() {
    demoSteps.forEach(step => {
      step.classList.remove("active");
    });
    const currentStepEl = document.getElementById(`demoStep${currentStep}`);
    if (currentStepEl) {
      currentStepEl.classList.add("active");
    }
    demoDots.forEach((dot, index) => {
      dot.classList.toggle("active", index + 1 === currentStep);
    });
    if (currentStep === 5) {
      startScanningAnimation();
    }
  }
  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep++;
      updateDemoStep();
    }
  }
  function startScanningAnimation() {
    const scanProgressFill = document.getElementById("scanProgressFill");
    const rugCount = document.getElementById("rugCount");
    if (scanProgressFill) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        scanProgressFill.style.width = progress + "%";
        if (rugCount) {
          rugCount.textContent = Math.floor(progress / 7);
        }
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(nextStep, 500);
        }
      }, 100);
    }
  }
  if (watchDemoBtn) {
    watchDemoBtn.addEventListener("click", openDemoModal);
  }
  if (closeModal) {
    closeModal.addEventListener("click", closeDemoModalFn);
  }
  if (demoCloseBtn) {
    demoCloseBtn.addEventListener("click", closeDemoModalFn);
  }
  if (demoConnectBtn) {
    demoConnectBtn.addEventListener("click", nextStep);
  }
  if (phantomOption) {
    phantomOption.addEventListener("click", nextStep);
  }
  if (approveBtn1) {
    approveBtn1.addEventListener("click", nextStep);
  }
  if (approveBtn2) {
    approveBtn2.addEventListener("click", nextStep);
  }
  if (claimBtn) {
    claimBtn.addEventListener("click", nextStep);
  }
  demoDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentStep = index + 1;
      updateDemoStep();
    });
  });
  if (demoModal) {
    demoModal.addEventListener("click", function (e) {
      if (e.target === demoModal.querySelector(".modal-overlay")) {
        closeDemoModalFn();
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (demoModal && demoModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeDemoModalFn();
      } else if (e.key === "ArrowRight") {
        if (currentStep < totalSteps) {
          currentStep++;
          updateDemoStep();
        }
      } else if (e.key === "ArrowLeft") {
        if (currentStep > 1) {
          currentStep--;
          updateDemoStep();
        }
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const statsBarFill = document.querySelector(".stats-bar-fill");
  if (statsBarFill) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = "0%";
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    observer.observe(statsBarFill);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const floatingIcons = document.querySelectorAll(".float-icon");
  if (floatingIcons.length > 0 && !window.matchMedia("(pointer: coarse)").matches) {
    document.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      floatingIcons.forEach((icon, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn, .wallet-btn, .demo-approve-btn, .demo-claim-btn");
  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;
      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
