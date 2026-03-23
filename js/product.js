// Ảnh sản phẩm: thư mục pics/products/ (đường dẫn tương đối từ html/product.html)
const PRODUCT_IMAGE_BASE = '../pics/products/';

const SUBCATEGORY_LABELS = {
    sofa: 'Sofa',
    arm: 'Arm',
    'ban-tra': 'Bàn trà',
    'ke-tv': 'Kệ TV',
    'tu-giay': 'Tủ giày',
    'ban-an': 'Bàn ăn',
    'ghe-an': 'Ghế ăn',
    'tu-bep': 'Tủ bếp',
    giuong: 'Giường',
    'tap-dau-giuong': 'Tap đầu giường',
    'don-cuoi-giuong': 'Đôn cuối giường',
    'ban-trang-diem': 'Bàn trang điểm',
    'don-ngoi-trang-diem': 'Đôn ngồi trang điểm',
    'tu-quan-ao': 'Tủ quần áo'
};

/** Đường dẫn con trong pics/products/ (theo từng danh mục phụ) */
const PRODUCT_IMAGES_BY_SUBCATEGORY = {
    sofa: [
        'living/Sofa/1.jpg',
        'living/Sofa/2.jpg',
        'living/Sofa/3.jpg',
        'living/Sofa/4.JPG',
        'living/Sofa/5.JPG',
        'living/Sofa/6.JPG',
        'living/Sofa/7.JPG',
        'living/Sofa/8.JPG',
        'living/Sofa/9.JPG',
        'living/Sofa/10.JPG',
        'living/Sofa/11.JPG',
        'living/Sofa/12.JPG',
        'living/Sofa/13.JPG',
        'living/Sofa/14.JPG',
        'living/Sofa/15.JPG',
        'living/Sofa/16.JPG',
        'living/Sofa/17.JPG',
        'living/Sofa/18.JPG',
        'living/Sofa/19.JPG',
        'living/Sofa/20.JPG',
        'living/Sofa/21.JPG',
        'living/Sofa/22.JPG',
        'living/Sofa/23.JPG',
        'living/Sofa/24.JPG',
        'living/Sofa/25.JPG',
        'living/Sofa/26.webp',
        'living/Sofa/27.jpg',
        'living/Sofa/28.webp',
        'living/Sofa/29.jpg'
    ],
    arm: [
        'living/Arm/1.JPG',
        'living/Arm/2.JPG',
        'living/Arm/3.JPG',
        'living/Arm/4.JPG',
        'living/Arm/5.jpg'
    ],
    'ban-tra': [
        'living/table_coffee/1.jpg',
        'living/table_coffee/2.jpg',
        'living/table_coffee/3.jpg',
        'living/table_coffee/4.jpg',
        'living/table_coffee/5.JPG',
        'living/table_coffee/6.JPG',
        'living/table_coffee/7.JPG',
        'living/table_coffee/8.JPG',
        'living/table_coffee/9.JPG',
        'living/table_coffee/10.JPG',
        'living/table_coffee/11.JPG',
        'living/table_coffee/12.JPG',
        'living/table_coffee/13.JPG',
        'living/table_coffee/14.JPG',
        'living/table_coffee/15.JPG',
        'living/table_coffee/16.JPG',
        'living/table_coffee/17.JPG',
        'living/table_coffee/18.JPG',
        'living/table_coffee/19.JPG',
        'living/table_coffee/20.JPG',
        'living/table_coffee/21.JPG',
        'living/table_coffee/22.JPG',
        'living/table_coffee/23.JPG',
        'living/table_coffee/24.JPG',
        'living/table_coffee/25.JPG',
        'living/table_coffee/26.jpg',
        'living/table_coffee/27.jpg'
    ],
    'ke-tv': [
        'living/TV_stand/1.JPG',
        'living/TV_stand/2.JPG',
        'living/TV_stand/3.JPG',
        'living/TV_stand/4.JPG',
        'living/TV_stand/5.JPG',
        'living/TV_stand/6.JPG',
        'living/TV_stand/7.JPG',
        'living/TV_stand/8.JPG',
        'living/TV_stand/9.JPG'
    ],
    'tu-giay': [
        'living/shoe_cabinet/1.jpg',
        'living/shoe_cabinet/2.jpeg',
        'living/shoe_cabinet/3.jpg',
        'living/shoe_cabinet/4.jpeg',
        'living/shoe_cabinet/5.jpg',
        'living/shoe_cabinet/6.jpg',
        'living/shoe_cabinet/7.jpg',
        'living/shoe_cabinet/8.jpg'
    ],
    'ban-an': [
        'kitchen/kitchen_table/1.jpg',
        'kitchen/kitchen_table/2.jpg',
        'kitchen/kitchen_table/3.jpg',
        'kitchen/kitchen_table/4.JPG',
        'kitchen/kitchen_table/5.JPG',
        'kitchen/kitchen_table/6.JPG',
        'kitchen/kitchen_table/7.JPG',
        'kitchen/kitchen_table/8.JPG',
        'kitchen/kitchen_table/9.JPG',
        'kitchen/kitchen_table/10.JPG',
        'kitchen/kitchen_table/11.JPG',
        'kitchen/kitchen_table/12.JPG',
        'kitchen/kitchen_table/13.JPG',
        'kitchen/kitchen_table/14.JPG',
        'kitchen/kitchen_table/15.JPG',
        'kitchen/kitchen_table/16.JPG',
        'kitchen/kitchen_table/17.JPG',
        'kitchen/kitchen_table/18.JPG',
        'kitchen/kitchen_table/19.JPG',
        'kitchen/kitchen_table/20.JPG',
        'kitchen/kitchen_table/21.JPG',
        'kitchen/kitchen_table/22.JPG'
    ],
    'ghe-an': [],
    'tu-bep': [
        'kitchen/kitchen_cabinet/1.JPG',
        'kitchen/kitchen_cabinet/2.JPG',
        'kitchen/kitchen_cabinet/3.JPG',
        'kitchen/kitchen_cabinet/4.JPG',
        'kitchen/kitchen_cabinet/5.JPG',
        'kitchen/kitchen_cabinet/6.JPG',
        'kitchen/kitchen_cabinet/7.JPG',
        'kitchen/kitchen_cabinet/8.JPG',
        'kitchen/kitchen_cabinet/9.JPG',
        'kitchen/kitchen_cabinet/10.JPG',
        'kitchen/kitchen_cabinet/11.JPG',
        'kitchen/kitchen_cabinet/12.JPG'
    ],
    giuong: [
        'bedroom/Bed/1.jpg',
        'bedroom/Bed/2.jpg',
        'bedroom/Bed/3.jpg',
        'bedroom/Bed/4.jpg',
        'bedroom/Bed/5.jpg',
        'bedroom/Bed/6.jpg',
        'bedroom/Bed/7.JPG',
        'bedroom/Bed/8.JPG',
        'bedroom/Bed/9.JPG',
        'bedroom/Bed/10.JPG',
        'bedroom/Bed/11.JPG',
        'bedroom/Bed/12.JPG',
        'bedroom/Bed/13.JPG',
        'bedroom/Bed/14.JPG',
        'bedroom/Bed/15.JPG',
        'bedroom/Bed/16.JPG',
        'bedroom/Bed/17.JPG',
        'bedroom/Bed/18.JPG',
        'bedroom/Bed/19.JPG'
    ],
    'tap-dau-giuong': [
        'bedroom/Bed_tab/1.jpg',
        'bedroom/Bed_tab/2.jpg',
        'bedroom/Bed_tab/3.jpg',
        'bedroom/Bed_tab/4.jpg',
        'bedroom/Bed_tab/5.jpg'
    ],
    'don-cuoi-giuong': [
        'bedroom/Don_bed/1.jpg',
        'bedroom/Don_bed/2.jpg'
    ],
    'ban-trang-diem': [
        'bedroom/makeup_Table/1(1).jpg',
        'bedroom/makeup_Table/1.JPG',
        'bedroom/makeup_Table/3.jpg',
        'bedroom/makeup_Table/4.JPG',
        'bedroom/makeup_Table/5.JPG',
        'bedroom/makeup_Table/6.JPG',
        'bedroom/makeup_Table/7.JPG',
        'bedroom/makeup_Table/8.JPG'
    ],
    'don-ngoi-trang-diem': [
        'bedroom/Don_makeup/1.jpg'
    ],
    'tu-quan-ao': [
        'bedroom/wadrobe/1.jpg',
        'bedroom/wadrobe/2.jpg',
        'bedroom/wadrobe/3.jpg',
        'bedroom/wadrobe/4.jpg',
        'bedroom/wadrobe/5.jpg',
        'bedroom/wadrobe/6.jpg',
        'bedroom/wadrobe/7.jpg',
        'bedroom/wadrobe/8.jpg',
        'bedroom/wadrobe/9.jpg',
        'bedroom/wadrobe/10.jpg',
        'bedroom/wadrobe/11.JPG'
    ]
};

function mapSubcategoryToProducts(subKey) {
    const relPaths = PRODUCT_IMAGES_BY_SUBCATEGORY[subKey] || [];
    const label = SUBCATEGORY_LABELS[subKey];
    return relPaths.map((relPath, i) => ({
        id: `${subKey}-${i + 1}`,
        name: label,
        category: subKey,
        image: PRODUCT_IMAGE_BASE + relPath
    }));
}

function buildProductsFromImages() {
    const keysPhongKhach = ['sofa', 'arm', 'ban-tra', 'ke-tv', 'tu-giay'];
    const keysPhongAn = ['ban-an', 'ghe-an', 'tu-bep'];
    const keysPhongNgu = ['giuong', 'tap-dau-giuong', 'don-cuoi-giuong', 'ban-trang-diem', 'don-ngoi-trang-diem', 'tu-quan-ao'];
    const pick = (keys) => {
        const o = {};
        keys.forEach((k) => {
            o[k] = mapSubcategoryToProducts(k);
        });
        return o;
    };
    return {
        'phong-khach': pick(keysPhongKhach),
        'phong-an': pick(keysPhongAn),
        'phong-ngu': pick(keysPhongNgu)
    };
}

const products = buildProductsFromImages();
var isFiltering = false;
function setupKeywordSearch() {
    const searchInput = keyword || document.getElementById('search-input');
   
    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }
    else console.log('Search input found ' + searchInput.value.length);
    
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if any
            const keywordValue = this.value.trim();
            if (keywordValue.length > 0) {
                isFiltering = true;
                // Update URL with keyword parameter
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('keyword', keywordValue);
                window.history.pushState({}, '', newUrl);
                // Filter products by keyword
                renderProducts(getProductsByKeyword(keywordValue));
            } else {
                // If empty, show all products from current category and remove keyword from URL
                isFiltering = false;
                const newUrl = new URL(window.location);
                newUrl.searchParams.delete('keyword');
                window.history.pushState({}, '', newUrl);
                filterProducts();
            }
        }
    }); 
}
// Get all products for a specific category
function getProductsByCategory(mainCategory, subCategory) {
    if (products[mainCategory] && products[mainCategory][subCategory]) {
        return products[mainCategory][subCategory];
    }
    return [];
}
function getProductsByKeyword(keyword) {
    const result = [];
    for (const mainCategory in products) {
        for (const subCategory in products[mainCategory]) {
            products[mainCategory][subCategory].forEach(product => {
                if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
                    result.push(product);
                }
            });
        }
    }
    return result;
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
        productItem.className = 'product-item scroll-animate';
        
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
            
            // Show/hide subcategories based on parent
            subCategoryRadios.forEach(subRadio => {
                const subLabel = subRadio.closest('.subcategory-label');
                if (subRadio.dataset.parent === mainCategory) {
                    subLabel.style.display = 'flex';
                } 
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
            isFiltering=true;
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
    
    const filteredProducts =  getProductsByCategory(mainCategory, subCategory);
    renderProducts(filteredProducts);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    setupCategoryFilters();
    
    // Check for keyword in URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const keywordParam = urlParams.get('keyword');
    
    const setupSearchWithRetry = () => {
        const searchInput = document.getElementById('search-input');
       
        if (searchInput) {
            setupKeywordSearch();
            
            // If keyword parameter exists, apply the search automatically
            if (keywordParam) {
                const keywordValue = decodeURIComponent(keywordParam);
                searchInput.value = keywordValue;
                isFiltering = true;
                renderProducts(getProductsByKeyword(keywordValue));
                return; // Don't run filterProducts() if we're searching by keyword
            }
        } else {
            // Retry after a short delay if header hasn't loaded yet
            console.warn('Search input not found, retrying...');
            setTimeout(setupSearchWithRetry, 100);
            return;
        }
        
        // Hide subcategories that don't belong to the initially selected main category
        const initiallySelectedMainCategory = document.querySelector('.main-category-radio:checked');
        if (initiallySelectedMainCategory) {
            const mainCategory = initiallySelectedMainCategory.value;
            const subCategoryRadios = document.querySelectorAll('.sub-category-radio');
            
            subCategoryRadios.forEach(subRadio => {
                const subLabel = subRadio.closest('.subcategory-label');

                if (subRadio.dataset.parent !== mainCategory) {
                    subLabel.style.display = 'none';
                }

            });
        }
        
        // Render initial products theo danh mục đang chọn (mặc định: Giường)
        if (!keywordParam) {
            filterProducts();
        }
    };
    setupSearchWithRetry();
});

