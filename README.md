# E-commerce Platform : GlobalGoods

## Overview

This is a comprehensive e-commerce platform developed using Next.js, React, and Tailwind CSS. The platform includes user authentication, product listings, a detailed product view, and shopping cart functionality, among other features. It is designed to be responsive, SEO-friendly, and includes internationalization for both Bengali and English.

### email:swapno@gmail.com password:12

### Live site : https://lwskart-nine.vercel.app/en

## Features

### User Authentication

- Implemented using access tokens and refresh tokens.
- Secure login and registration functionality.

### Home Page

- Custom home page based on the provided template.
- Displays 'SHOP BY CATEGORY', 'Trending Products', and 'TOP NEW ARRIVAL' sections with data fetched from the database.

### Product Details

- Clicking on a product shows its detailed information fetched from the database.
- The "Related Products" section shows items based on keywords, tags, or categories.
- Share functionality to social media.

### Cart and Wishlist

- The "Add to Cart" and "Add to Wishlist" buttons increase the count in the navbar.
- Buttons redirect to respective pages with proper data.
- Functionality is available only when the user is logged in.
- Redirects to login page if the user is not logged in, and retains the intended action post-login.

### Search and Filter

- Search feature displays results in a professional way.
- Filter products by categories, price, and size on product listing and search results pages.

### User Account

- Account page displays and allows updates to "Personal Profile", "Shipping Address", and "Billing Address".
- These pages are private routes, accessible only when the user is logged in.

### Checkout

- Displays items in the cart and includes a checkout form with validation.
- On successful order placement, a success message is shown, and an invoice can be downloaded.

### Order Management

- Generates and emails a PDF invoice after order completion.
- Uses `PDF-LIB` for PDF generation.

### Inventory Management

- Manages product stock, showing "Stock Out" when a product is unavailable.

### Internationalization

- Supports Bengali and English languages.

### SEO

The home page and product details pages are SEO-friendly

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Swapno963/lwskart.git
   cd lwskart
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file for environment variables:

4. Run the development server:
   ```sh
   npm run dev
   ```

## Usage

- Access the application at `http://localhost:3000`
- Register a new user or login with existing credentials.
- Browse products, add to cart or wishlist, and complete orders.
- Update personal information and view order history in the account section.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Node.js**: JavaScript runtime for server-side code.
- **MongoDB**: Database for storing product and user data.
- **JWT**: JSON Web Tokens for authentication.
- **PDF-LIB**: Library for PDF generation.
- **Nodemailer**: For sending emails.
