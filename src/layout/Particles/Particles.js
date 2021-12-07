import Particles from "react-tsparticles";
import './Particles.scss'
const Particless = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 4,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },

          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "images",
            image: [
              {
                src: "/assets/calendly.png",
               
              },
              {
                src: "/assets/mailchimp.png",
                width: 150,
                height: 150,
              },
              {
                src: "/assets/tiktok.png",
                width: 150,
                height: 150,
              },
              {
                src: "/assets/link.png",
                width: 50,
                height: 50,
              },
              {
                src: "/assets/img.png",
                width: 50,
                height: 50,
              },
              {
                src: "/assets/twitch.png",
                width: 50,
                height: 50,
              },
              {
                src: "/assets/Instagram.png",
                width: 50,
                height: 50,
              },
              {
                src: "/assets/yt.png",
                width: 50,
                height: 50,
              },
            ],
          },
          size: {
            random: true,
            value: 25,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particless;
