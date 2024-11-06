# Live Website Link: https://outgoing-snails.surge.sh/

##  Requirement Document Link: 

https://drive.google.com/file/d/1T7wh0y_ahozdaXKoagEMlihhY62U46iX/view?usp=drive_link

## *List of React Fundamental concepts used in the project:*

__*React Router:*__ Utilizes createBrowserRouter and RouterProvider to manage client-side routing, including nested routes, programmatic navigation (Navigate), and an error page component (ErrorPage).

__*Dynamic Routing and URL Parameters:*__ useParams and URL structure (e.g., /home/products/:category or /details/:productId) is used for routing with dynamic parameters, enabling page-specific data loading.

__*React Router's Outlet:*__ The Outlet component from react-router-dom serves as a placeholder. Nested routes to render their components within Root is created. This is essential for building multi-page applications with shared layouts.

__*Error Handling:*__ The project uses errorElement in createBrowserRouter to handle and display custom error pages for navigation issues.

__*Toast Notifications:*__ ToastContainer from react-toastify is used to handle alert when adding gadgets to cart and wishlist. Different alerts are shown by using this.

__*HelmetProvider:*__ This is used for Dynamic title of each page. Different titles for different pages are used by using HelmetProvider.

## __*Handling and managing data:*__

Local Storage is used in this project for handling and managing data.

## *5 features of the website/project:* 

__*1.*__ The website has a structured navigation bar, product categories.

__*2.*__ User can see individual product details in a new page with more information like rating.

__*3.*__ User can add a item to shopping cart and wishlist by simply clicking the cart and wishlist icon buttons.

__*4.*__ User can see the total price of the added item to cart and also sort the items by price using sort button.

__*5:*__ User can purchase cart items by clicking purchase button, after that the button will disabled and the price will be 0.

