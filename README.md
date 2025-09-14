# Save the date

## A simple an elegant wedding invite website for Bhavya and Diksha

* Build using Vite + React
* has a static page for Save the date information with a video playing in bg
* Might have some copyrighted content, intended for just personal use no commercial use intended
* To have a navbar and further sections like our story bride and groom rsvp and Photos
* Using react to have an option to further connect with a backend if need to send mails or connect with a DB to share and showcase photographs

---

# Build and Deploy information

* branch `gh-pages` is used for deploying on github pages
* branch `basic-code` has the react code will move in master soon
* can be build in local using `npm run dev`
* to build a distributable code run `npm run build`
* to deploy the latest version run `npm run deploy` in local terminal this would update the code on `gh-pages` branch and trigger github actions
* once all the actions are green the code can be viewed on github pages
* [Save the Date](https://arorabhavya23.github.io/SaveTheDate/) use this link to access the website

---

# Project Documentation

## Features

- Responsive wedding invitation website
- Video background on the landing page
- Animated "Save the Date" and invitation sections
- Smooth navbar that appears on scroll
- Modular React components for easy extension
- Ready for deployment on GitHub Pages

## Project Structure

```bash
/public
  /assets
    /videos
      - bg-video.mp4
    /images
      - bride-groom.jpg
      - rsvp.jpg
  - index.html
  - 404.html
/src
  /components
    - Navbar.jsx
    - Footer.jsx
    - VideoBackground.jsx
    - SaveTheDateSection.jsx
    - InvitationSection.jsx
  /pages
    - Home.jsx
    - OurStory.jsx
    - BrideGroom.jsx
    - RSVP.jsx
    - Photos.jsx
  - App.jsx
  - main.jsx
/styles
  - App.css
  - index.css
  - navbar.css
  - footer.css
  - videoBackground.css
  - saveTheDateSection.css
  - invitationSection.css
```

## Technologies Used

- React
- Vite
- GitHub Actions
- GitHub Pages
- CSS3
- HTML5
- JavaScript ES6

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/arorabhavya23/SaveTheDate.git
   ```
2. Navigate to the project directory
   ```sh
   cd SaveTheDate
   ```
3. Install the necessary packages
   ```sh
   npm install
   ```
4. Run the development server
   ```sh
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to see the website in action.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/arorabhavya23/SaveTheDate](https://github.com/arorabhavya23/SaveTheDate)

---

Thank you for visiting our project! We hope you enjoy the website as much as we enjoyed building it.
