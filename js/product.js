// Product data - This would typically come from a database or API
const products = {
    'phong-khach': {
        'sofa': Array(8).fill(null).map((_, i) => ({
            id: `sofa-${i + 1}`,
            name: 'Sofa',
            category: 'sofa',
            image: '../pics/Sofa căn hộ đg Bưởi/z7391411977723_d45b66880ff799f0daf0233b925ab4ae.jpg'
        })),
        'arm': Array(6).fill(null).map((_, i) => ({
            id: `arm-${i + 1}`,
            name: 'Arm',
            category: 'arm',
            image: '../pics/546627022_1363997822398561_581512338130264891_n.jpg'
        })),
        'ban-tra': Array(5).fill(null).map((_, i) => ({
            id: `ban-tra-${i + 1}`,
            name: 'Bàn trà',
            category: 'ban-tra',
            image: '../pics/bafn tra.jpg'
        })),
        'ke-tv': Array(3).fill(null).map((_, i) => ({
            id: `ke-tv-${i + 1}`,
            name: 'Kệ TV',
            category: 'ke-tv',
            image: '../pics/thiet-ke-thi-cong-noi-that-4.png'
        })),
        'tu-giay': Array(2).fill(null).map((_, i) => ({
            id: `tu-giay-${i + 1}`,
            name: 'Tủ giày',
            category: 'tu-giay',
            image: '../pics/vn-11134207-7r98o-m07d7985vi0daa.jpg'
        }))
    },
    'phong-an': {
        'ban-an': Array(8).fill(null).map((_, i) => ({
            id: `ban-an-${i + 1}`,
            name: 'Bàn ăn',
            category: 'ban-an',
            image: '../pics/thietkenoithatchungcutrongoi8-3422.jpg'
        })),
        'ghe-an': Array(6).fill(null).map((_, i) => ({
            id: `ghe-an-${i + 1}`,
            name: 'Ghế ăn',
            category: 'ghe-an',
            image: '../pics/546844290_1363998112398532_5732524394673550953_n.jpg'
        })),
        'tu-bep': Array(10).fill(null).map((_, i) => ({
            id: `tu-bep-${i + 1}`,
            name: 'Tủ bếp',
            category: 'tu-bep',
            image: '../pics/tu-bep-tan-co-dien-go-cong-nghiep.webp'
        }))
    },
    'phong-ngu': {
        'giuong': Array(24).fill(null).map((_, i) => ({
            id: `giuong-${i + 1}`,
            name: 'Giường',
            category: 'giuong',
            image: '../pics/Mau-giuong-ngu-boc-da-ni-nem-phong-cach-hien-dai-y-chau-au-LG-GN431.jpg'
        })),
        'tap-dau-giuong': Array(6).fill(null).map((_, i) => ({
            id: `tap-dau-giuong-${i + 1}`,
            name: 'Tap đầu giường',
            category: 'tap-dau-giuong',
            image: '../pics/z7391448281830_e6832d7e53f9abc97a0af865f7598251.jpg'
        })),
        'don-cuoi-giuong': Array(4).fill(null).map((_, i) => ({
            id: `don-cuoi-giuong-${i + 1}`,
            name: 'Đôn cuối giường',
            category: 'don-cuoi-giuong',
            image: '../pics/z7391448285688_985ca93ef2a84a736beec965248cd19e.jpg'
        })),
        'ban-trang-diem': Array(5).fill(null).map((_, i) => ({
            id: `ban-trang-diem-${i + 1}`,
            name: 'Bàn trang điểm',
            category: 'ban-trang-diem',
            image: '../pics/z7391448291656_d9972fed0d006c324130ba4b4267015d.jpg'
        })),
        'don-ngoi-trang-diem': Array(3).fill(null).map((_, i) => ({
            id: `don-ngoi-trang-diem-${i + 1}`,
            name: 'Đôn ngồi trang điểm',
            category: 'don-ngoi-trang-diem',
            image: '../pics/z7391461828421_23f31e36fe0c0979415f1a2df27471c9.jpg'
        })),
        'tu-quan-ao': Array(8).fill(null).map((_, i) => ({
            id: `tu-quan-ao-${i + 1}`,
            name: 'Tủ quần áo',
            category: 'tu-quan-ao',
            image: '../pics/tu qao.png'
        }))
    }
};

// Get all products for a specific category
function getProductsByCategory(mainCategory, subCategory) {
    if (products[mainCategory] && products[mainCategory][subCategory]) {
        return products[mainCategory][subCategory];
    }
    return [];
}

// Render products to the DOM
function renderProducts(productList) {
    const productListContainer = document.getElementById('product-list');
    const resultCount = document.getElementById('result-count');
    
    // Clear existing products
    productListContainer.innerHTML = '';
    
    // Update result count
    resultCount.textContent = productList.length;
    
    // Render each product
    productList.forEach(product => {
        const productItem = document.createElement('a');
        productItem.href = `#${product.id}`;
        productItem.className = 'product-item';
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='../pics/logo kh nen 1.png'">
            <h3>${product.name}</h3>
        `;
        
        productListContainer.appendChild(productItem);
    });
}

// Handle category filter changes
function setupCategoryFilters() {
    const mainCategoryRadios = document.querySelectorAll('.main-category-radio');
    const subCategoryRadios = document.querySelectorAll('.sub-category-radio');
    
    // Handle main category change
    mainCategoryRadios.forEach(radio => {
        
        radio.addEventListener('change', function() {
            const mainCategory = this.value;
            
            // Uncheck all subcategories
            subCategoryRadios.forEach(subRadio => {
                subRadio.checked = false;
            });
            
            // If a subcategory was previously selected for this category, select the first one
            const firstSubCategory = document.querySelector(`.sub-category-radio[data-parent="${mainCategory}"]`);
            if (firstSubCategory) {
                firstSubCategory.checked = true;
                filterProducts();
            }
        });
    });
    
    // Handle subcategory change
    subCategoryRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            filterProducts();
        });
    });
}

// Filter products based on selected categories
function filterProducts() {
    const selectedSubCategory = document.querySelector('.sub-category-radio:checked');
    const selectedMainCategory =  document.querySelector(`.main-category-radio[value="${selectedSubCategory.getAttribute('data-parent')}"]`);
    selectedMainCategory.checked = true; //Follow theo subcategory
    
    if (!selectedMainCategory || !selectedSubCategory) {
        return;
    }
    
    const mainCategory = selectedMainCategory.value;
    const subCategory = selectedSubCategory.value;
    
    const filteredProducts = getProductsByCategory(mainCategory, subCategory);
    renderProducts(filteredProducts);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupCategoryFilters();
    
    // Hide subcategories that don't belong to the initially selected main category
    const initiallySelectedMainCategory = document.querySelector('.main-category-radio:checked');
    if (initiallySelectedMainCategory) {
        const mainCategory = initiallySelectedMainCategory.value;
        const subCategoryRadios = document.querySelectorAll('.sub-category-radio');
        
        subCategoryRadios.forEach(subRadio => {
            const subLabel = subRadio.closest('.subcategory-label');
                subLabel.style.display = 'flex';
            
        });
    }
    
    // Render initial products (Giường - 24 products)
    filterProducts();
});

