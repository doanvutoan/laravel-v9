<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Đủ chức năng
- Sử dụng login laravel
- Sử dụng guard multiple
## Chú thích
- Sử dụng thư viện "laravel/breeze": "^1.9"
- Tạo bảng user có nhiều guard
- Khi đăng ký edit file auth/registeredUserController
- Tạo mặc định guard web và login với guard web
- Khi login edit file auth/loginRequest gắn các guard vào user
- Thêm file route thì edit file providers/routeServiceProvider
- Cấu hình guard thì edit config/auth
- Đăng nhập nhiều user với nhiều guard đều chạy được
## Thêm phần vuejs
- Cài đặt các gói vue, vuex, vue-loader, vue-router, axios
- Tạo api laravel sử dụng sanctum
- router/api.php dùng chung cho việc đăng ký lấy token
- token sẽ tự động login để lấy user
- vue/store dùng làm nơi chứa sử dụng chung mọi nơi
- vue/view dùng store dispatch lên store
- vue/store dùng actions function hứng param truyền đến
- sử dụng axios để pass crf token laravel
- 
