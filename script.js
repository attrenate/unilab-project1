
   
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const sidebarCloseButton = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const body = document.body;

    // Functions to handle sidebar state
    const openSidebar = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('sidebar-open');
    };

   
    if (mobileMenuButton && sidebar && sidebarCloseButton && overlay) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openSidebar();
        });

        sidebarCloseButton.addEventListener('click', () => {
            closeSidebar();
        });

        overlay.addEventListener('click', () => {
            closeSidebar();
        });

        // Close sidebar on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });
    } else {
        console.error('Sidebar elements not found. Check IDs.');
    }

    // Handle dropdown menu items
    const menuItemsWithChildren = sidebar.querySelectorAll('.menu-item-has-children > a');
    
    menuItemsWithChildren.forEach(item => {
        item.addEventListener('click', (e) => {
             if (item.getAttribute('href') === '#') {
                e.preventDefault(); 
             }
            
            const parentLi = item.parentElement;
            const subMenu = parentLi.querySelector('.sub-menu');
            
            if (subMenu) {
                 subMenu.classList.toggle('active'); 
                 
                
                 const caret = parentLi.querySelector('.caret-down, .caret-up');
                 if (caret) {
                    if (subMenu.classList.contains('active')) {
                         caret.textContent = '▲';
                         caret.classList.remove('caret-down');
                         caret.classList.add('caret-up');
                    } else {
                         caret.textContent = '▼';
                         caret.classList.remove('caret-up');
                         caret.classList.add('caret-down');
                    }
                 }
            }
        });
    });

  
