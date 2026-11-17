# Relay

**Good work, in good hands.** Relay is a responsive landing page for a fictional team workspace that helps small teams keep projects, updates, and handoffs moving together.

## Preview

The page includes a custom product dashboard illustration, three feature cards, a three-step workflow, two pricing plans, and a walkthrough request form.

## Run locally

This is a static site with no build step or package installation.

1. Clone or download this repository.
2. Open `index.html` in a browser, or start a local server from the project folder:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## What you can try

- Use the navigation to move between Product, How it works, Pricing, and Contact.
- Open the compact navigation menu on a narrow screen.
- Switch Studio pricing between monthly and yearly billing.
- Submit the walkthrough form to see required-field and email validation, followed by an on-page confirmation.

The form is front-end only. It does not send or save submissions.

## Built with

- Semantic HTML
- Responsive CSS, including the dashboard illustration
- Vanilla JavaScript
- DM Sans and Manrope, with system font fallbacks

## Design notes

The warm paper and garden-green palette keeps the page grounded while reserving stronger contrast for the main actions.
An editorial serif accent gives Relay a distinct voice beside the straightforward sans-serif interface.
The dashboard and feature vignettes make an otherwise abstract workflow product easy to picture.
Each section follows the same spacing and type hierarchy so the long page stays easy to scan.
The mobile layout simplifies the dashboard preview instead of shrinking the desktop interface into an unreadable thumbnail.
The contact form explains its client-side behavior and gives immediate, accessible feedback.
