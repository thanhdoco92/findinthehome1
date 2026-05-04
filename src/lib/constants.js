// Màu hệ thống kiến trúc (Light theme optimized)
export const TYPE_COLORS = {
  house: '#ffffff',
  floor: '#faf9f7',
  room: '#fdfdfc',        // Nền phòng sáng
  roomBorder: '#dcd9d2',  // Viền phòng nhẹ
  roomText: '#3d405b',    // Chữ phòng tối
  container: '#fdf8e9',   // Nền hộp/tủ màu vàng nhạt
  containerBorder: '#f2cc8f', 
  containerText: '#b07f2e',
  item: '#e07a5f',        // Accent color (Warm coral)
  itemText: '#ffffff',
};

export const TYPE_ICONS = {
  house: 'home',
  floor: 'layers',
  room: 'square',
  container: 'box',
  item: 'circle',
};

// Các icon khả dụng cho vật dụng (item)
export const ITEM_ICONS = [
  'circle', 'scissors', 'tv', 'laptop', 'key', 'tablet', 'smartphone', 
  'shirt', 'wrench', 'hammer', 'book', 'umbrella', 'camera', 
  'headphones', 'glasses', 'coffee', 'apple', 'battery', 'watch', 
  'pill', 'gift', 'shopping-bag', 'briefcase', 'wallet', 'credit-card'
];

// Quy tắc parent→child hợp lệ (Section 7)
export const VALID_CHILDREN = {
  house: ['floor'],
  floor: ['room'],
  room: ['wall', 'door', 'window', 'furniture', 'container', 'item'],
  wall: ['door', 'window'],
  door: [],
  window: [],
  furniture: [],
  container: ['container', 'item'],
  item: [], // item không có con
};

// Entity types (Section 4)
export const ENTITY_TYPES = [
  'house', 'floor', 'room', 
  'wall', 'door', 'window', 
  'furniture', 'container', 'item'
];

// Valid subtypes per type (Section 5)
export const VALID_SUBTYPES = {
  door: ['single', 'double', 'sliding', 'folding'],
  window: ['standard', 'bay', 'skylight', 'sliding'],
  furniture: [
    'bed', 'sofa', 'desk', 'table', 'chair', 
    'bathtub', 'toilet', 'sink', 'stove', 'fridge', 
    'tv', 'bookshelf_open'
  ],
  container: [
    'wardrobe', 'cabinet', 'drawer', 'box', 
    'shelf_unit', 'chest', 'rack', 'basket', 
    'fridge_interior', 'storage_bag'
  ]
};

// Tỉ lệ canvas: 1 mét = bao nhiêu pixel
export const METERS_TO_PIXELS = 50;

// Giới hạn API
export const MAX_TREE_DEPTH = 5;
export const DEFAULT_TREE_DEPTH = 2;
export const DEFAULT_SEARCH_LIMIT = 20;

// Color palette cho container furniture styles (game-style)
export const CONTAINER_PALETTE = {
  bookshelf:  { fill: '#f5e6d3', stroke: '#c4956a', label: '📚 Kệ sách' },
  shelf_unit: { fill: '#f5e6d3', stroke: '#c4956a', label: '📚 Kệ đơn' },
  drawer:     { fill: '#e8e0d4', stroke: '#b5a898', label: '🗄️ Ngăn kéo' },
  wardrobe:   { fill: '#f0e4d7', stroke: '#c7a882', label: '🚪 Tủ quần áo' },
  cabinet:    { fill: '#e6dfd6', stroke: '#a89b8c', label: '🗄️ Tủ kệ' },
  box:        { fill: '#fdf2e3', stroke: '#dbb978', label: '📦 Hộp/Thùng' },
  chest:      { fill: '#fdf2e3', stroke: '#dbb978', label: '📦 Rương' },
  basket:     { fill: '#f0ebe0', stroke: '#b8a88e', label: '🧺 Giỏ/Rổ' },
  rack:       { fill: '#eee8df', stroke: '#a89b8c', label: '🪜 Giá treo' },
  fridge:     { fill: '#e8eef4', stroke: '#9fb3c8', label: '🧊 Tủ lạnh' },
  fridge_interior: { fill: '#e8eef4', stroke: '#9fb3c8', label: '🧊 Ngăn tủ lạnh' },
  storage_bag: { fill: '#f0ebe0', stroke: '#b8a88e', label: '👜 Túi đựng' },
  default:    { fill: '#fdf8e9', stroke: '#f2cc8f', label: '📦 Mặc định' },
};

// Icons available for container type (for PropertyPanel dropdown)
export const CONTAINER_ICONS = [
  'box', 'bookshelf', 'shelf_unit', 'drawer', 'wardrobe', 'cabinet',
  'chest', 'basket', 'rack', 'fridge', 'fridge_interior', 'storage_bag'
];
