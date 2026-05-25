// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mainImage = document.getElementById('current-image');
    const projectTitle = document.getElementById('project-title');
    const projectDesc = document.getElementById('project-desc');
    



    // Gallery Interaction
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            galleryItems.forEach(g => g.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            
            // Update main viewport with a subtle animation
            mainImage.style.opacity = 0;
            mainImage.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                mainImage.src = item.getAttribute('data-img');
                projectTitle.textContent = item.getAttribute('data-title');
                projectDesc.textContent = item.getAttribute('data-desc');
                
                mainImage.style.opacity = 1;
                mainImage.style.transform = 'scale(1)';
            }, 300);
        });
    });




    // Menu Dropdowns Logic
    const menuItems = document.querySelectorAll('.menu-item');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdownId = item.id.replace('menu-', 'dropdown-');
            const dropdown = document.getElementById(dropdownId);
            
            // Close others
            dropdowns.forEach(d => {
                if(d !== dropdown) d.classList.remove('show');
            });
            menuItems.forEach(m => {
                if(m !== item) m.classList.remove('active');
            });
            
            // Toggle current
            dropdown.classList.toggle('show');
            item.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('show'));
        menuItems.forEach(m => m.classList.remove('active'));
    });

    // Dropdown Actions
    document.getElementById('action-theme').addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('light-theme');
    });

    document.getElementById('action-enhance').addEventListener('click', (e) => {
        e.preventDefault();
        if(mainImage.style.filter) {
            mainImage.style.filter = '';
        } else {
            mainImage.style.filter = 'contrast(1.3) saturate(1.2) brightness(1.1)';
        }
    });

    document.getElementById('action-fullscreen').addEventListener('click', (e) => {
        e.preventDefault();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    document.getElementById('action-about').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Portfólio 3D\n\nDesenvolvido com inspiração nas interfaces de softwares como Blender e Substance Painter.\nPermite visualizar renderizações e atributos dos projetos.');
    });

});
