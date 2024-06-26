# Amazon Navigation Bar README

## HTML Tags Explanation

- `<header>`: Defines the header section of the webpage, containing the navigation elements.
- `<nav>`: Represents the navigation bar.
- `<div>`: Defines a section or a container.
  - `.navbar`: The main container for the navigation bar.
  - `.nav-logo`: Container for the Amazon logo.
  - `.address`: Container for the delivery address and location.
  - `.nav-search`: Container for the search bar.
  - `.sign-in`: Container for the sign-in section.
  - `.returns`: Container for the returns section.
  - `.cart`: Container for the shopping cart section.
  - `.banner`: Container for the banner section below the navigation bar.
  - `.banner-content`: Container for the content within the banner.
  - `.panel`: Container for the menu panel.
- `<a>`: Defines a hyperlink.
- `<img>`: Embeds an image.
- `<span>`: Used to group inline elements.
- `<select>`: Creates a dropdown menu.
- `<option>`: Defines options within a dropdown menu.
- `<input>`: Creates an input field.
- `<ul>`: Defines an unordered list.
- `<li>`: Defines list items within an unordered list.
- `<p>`: Defines a paragraph of text.

## CSS Properties Explanation

- `.navbar`: 
  - `height: 60px`: Sets the height.
  - `display: flex`: Uses flexbox for layout.
  - `align-items: center`: Vertically centers items.
  - `justify-content: space-between`: Distributes items with space between them.
  - `cursor: pointer`: Changes cursor on hover.
  - `color: #fff`: Sets text color to white.
  - `max-width: 1280px`: Limits the maximum width.
  - `margin: 0 auto`: Centers the navbar horizontally.

- `a`: 
  - `text-decoration: none`: Removes underline.
  - `color: #fff`: Sets text color to white.

- `.nav-logo img`: 
  - `margin-top: 10px`: Adds top margin.
  - `width: 128px`: Sets image width.

- `.address .deliver`: 
  - `margin-left: 20px`: Adds left margin.
  - `font-size: 0.75rem`: Sets font size.
  - `color: #ccc`: Sets text color.

- `.material-symbols-outlined`: 
  - `font-family: 'Material Symbols Outlined'`: Sets the font family.
  - `font-weight: normal`: Sets font weight.
  - `font-style: normal`: Sets font style.
  - `font-size: 24px`: Sets font size.
  - `line-height: 1`: Sets line height.
  - `-webkit-font-smoothing: antialiased`: Enhances font rendering.

- `.nav-search`: 
  - `display: flex`: Uses flexbox for layout.
  - `justify-content: space-evenly`: Evenly spaces items.
  - `max-width: 620px`: Limits the maximum width.
  - `width: 100%`: Sets width to 100%.
  - `height: 40px`: Sets height.
  - `border-radius: 10px`: Rounds the corners.

- `.select-search`: 
  - `background: #f3f3f3`: Sets background color.
  - `width: 50px`: Sets width.
  - `text-align: center`: Centers text.
  - `border-top-left-radius: 10px`: Rounds top-left corner.
  - `border-bottom-left-radius: 10px`: Rounds bottom-left corner.
  - `border: none`: Removes border.

- `.search-input`: 
  - `max-width: 600px`: Limits the maximum width.
  - `width: 100%`: Sets width to 100%.
  - `font-size: 1rem`: Sets font size.
  - `border: none`: Removes border.
  - `outline: none`: Removes outline on focus.
  - `padding-left: 10px`: Adds left padding.

- `.search-icon`: 
  - `max-width: 45px`: Limits the maximum width.
  - `width: 100%`: Sets width to 100%.
  - `display: flex`: Uses flexbox for layout.
  - `justify-content: center`: Centers items horizontally.
  - `align-items: center`: Centers items vertically.
  - `font-size: 1.2rem`: Sets font size.
  - `background: #febd68`: Sets background color.
  - `color: #000`: Sets text color.
  - `cursor: pointer`: Changes cursor on hover.
  - `border-top-right-radius: 10px`: Rounds top-right corner.
  - `border-bottom-right-radius: 10px`: Rounds bottom-right corner.

- `.sign-in, .returns span`: 
  - `font-size: 0.875rem`: Sets font size.
  - `font-weight: 600`: Sets font weight.

- `.sign-in p, .returns p`: 
  - `font-size: 0.75rem`: Sets font size.

- `.cart`: 
  - `display: flex`: Uses flexbox for layout.

- `.cart .cart-icon`: 
  - `font-size: 2.5rem`: Sets font size.

- `.cart p`: 
  - `margin-top: 20px`: Adds top margin.
  - `font-weight: 500`: Sets font weight.
  
## Amazon Header ScreenShot
![Amazon Navigation Bar](https://github.com/Fazila8790/WEEKTEST/blob/main/weekTest5/images/AmazonHeader.jpeg)


## Amazon main section and Footer section - HTML and CSS Explanation

### HTML Tags:

- `<section class="hero-section">`: Defines a section for the hero image with a background image.
- `<img src="...">`: Inserts the hero image in the hero section.
- `<section class="shop-section">`: Section containing a grid of product links.
- `<div class="shop-images">`: Container for individual product links in a grid layout.
- `<div class="shop-link">`: Container for each product link with title, image, and "Shop now" button.
- `<h3>`, `<img>`, `<a>`: Headings, images, and links used within each `.shop-link` div.
- `<footer>`: Footer section containing various navigation links and sections.
- `<a href="#" class="footer-title">`: Back to top link styled as a button in the footer.
- `<div class="footer-items">`: Container for footer navigation sections.
- `<ul>` and `<li>`: Lists and list items used for organizing footer links.
- `<h3>`: Heading tags used within each footer navigation section.

### CSS Properties:

#### Hero Section (`hero-section`):

- `.hero-section img`: Styles for the hero image including height, width, and background properties.

#### Shop Section (`shop-section`, `shop-images`, `shop-link`):

- `.shop-section`: Styles for the shop section including display, alignment, background color, and padding.
- `.shop-images`: Grid layout for product links with responsive columns, gaps, and width constraints.
- `.shop-link`: Styling for each product link including padding, background color, cursor, flexbox properties, and transition effects.
- `.shop-link h3`: Styles for the title of each product link including margin.
- `.shop-link img`: Styles for the image within each product link including width, height, and object-fit properties.
- `.shop-link a`: Styles for the "Shop now" link including display, margin, font size, color, font weight, and transition effects.

## Amazon main section ScreenShot
![Amazon main Bar](https://github.com/Fazila8790/WEEKTEST/blob/main/weekTest5/images/body_sectiion.jpeg)

#### Footer (`footer`, `.footer-title`, `.footer-items`, `.footer-items ul`, `.footer-items h3`, `.footer-items li a`):

- `.footer-title`: Styles for the back to top link/button including display, alignment, background color, text color, font size, and font weight.
- `.footer-items`: Styles for the footer navigation section including display, alignment, width, margin, and background color.
- `.footer-items ul`: Styles for lists within the footer including list style, margin, and spacing.
- `.footer-items h3`: Styles for headings within footer navigation sections including font size, font weight, margin, and text color.
- `.footer-items li a`: Styles for links within footer lists including text color, font size, and transition effects.

### Summary:

This README.md file provides an overview of the HTML tags and CSS properties used in the main page (hero section, product grid) and footer bar of an Amazon-inspired UI. It outlines how each HTML tag is structured and how CSS properties are applied to achieve the desired layout, styling, and functionality.


## Amazon footer section ScreenShot
![Amazon footer Bar](https://github.com/Fazila8790/WEEKTEST/blob/main/weekTest5/images/footer_section.jpeg)
