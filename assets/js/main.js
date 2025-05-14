
    // Inisialisasi LightGallery saat halaman siap
    const gallery1 = document.getElementById('absensiGallery1');
    const openGalleryBtn1 = document.getElementById('openGallery1');

    let lgInstance1;

    openGalleryBtn1.addEventListener('click', function(e) {
      e.preventDefault();

      // Hanya inisialisasi sekali
      if (!lgInstance1) {
        lgInstance1 = lightGallery(gallery1, {
          plugins: [lgZoom, lgThumbnail],
          speed: 400,
          licenseKey: '0000-0000-000-0000', // biarkan default
        });
      }

      // Buka galeri
      lgInstance1.openGallery();
    });
    
    const gallery2 = document.getElementById('laundryGallery2');
    const openGalleryBtn2 = document.getElementById('openGallery2');

    let lgInstance2;

    openGalleryBtn2.addEventListener('click', function(e) {
      e.preventDefault();

      // Hanya inisialisasi sekali
      if (!lgInstance2) {
        lgInstance2 = lightGallery(gallery2, {
          plugins: [lgZoom, lgThumbnail],
          speed: 400,
          licenseKey: '0000-0000-000-0000', // biarkan default
        });
      }

      // Buka galeri
      lgInstance2.openGallery();
    });


    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    // Typing effect
    const texts = ["Mobile Developer", "Web Developer"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;
    const dynamicText = document.querySelector('.dynamic-text');

    function typeEffect() {
      const currentText = texts[index];
      
      if (isDeleting) {
        dynamicText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        dynamicText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 1000; // Delay before start deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typingDelay = 500; // Delay before start typing new text
      }

      setTimeout(typeEffect, isDeleting ? 100 : typingDelay);
    }

    // Start typing effect after a delay
    setTimeout(typeEffect, 1000);

    // Navbar scroll
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('burger-active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('nav-active')) {
          navLinks.classList.remove('nav-active');
          burger.classList.remove('burger-active');
        }

        // Scroll to target
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Dark mode toggle
    const themeToggle = document.querySelector('.theme-toggle');
    
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const icon = themeToggle.querySelector('i');
      
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });

    // Project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter projects
        const filter = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category');
          
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.add('show');
            }, 50);
          } else {
            card.classList.remove('show');
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Skills tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding content
        const contentId = `${this.getAttribute('data-tab')}-content`;
        document.getElementById(contentId).classList.add('active');
      });
    });

    // Form submission
    // const contactForm = document.getElementById('contactForm');
    
    // contactForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
      
    //   // Normally would send form data to server
    //   alert('Terima kasih! Pesan Anda telah dikirim.');
    //   contactForm.reset();
    // });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section, header');
    const navLinksItem = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id') || 'home';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });


    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // tetap dicegah karena kita submit manual pakai fetch

      const formData = new FormData(contactForm);

      fetch("https://formspree.io/f/mgvknvbq", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert("Terima kasih! Pesan Anda telah dikirim.");
          contactForm.reset();
        } else {
          alert("Ups! Terjadi kesalahan saat mengirim pesan.");
        }
      })
      .catch(error => {
        alert("Gagal mengirim. Periksa koneksi Anda.");
      });
    });
