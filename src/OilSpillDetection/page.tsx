import { Link } from "react-router-dom";

// Assets
import githubIcon from "../assets/icons/github.svg";
import coverPhoto from "./assets/cover.png";
import AESSLogo from "./assets/AESSLogo.png";
import oilSpill from "./assets/oilspillimage.png";
import modelArchitecture from "./assets/model overview.png";
import dashboard from "./assets/dashboard.png";
import dataset from "./assets/dataset.png";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollTopButton";

export default function OilSpillDetection() {
  // Scroll to top on page load
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center w-full border-b-2 border-border bg-background fixed z-10 py-4 px-6 md:px-12 lg:px-[7%] h-18">
        {/* NAME */}
        <Link to={"/"}>
          <div className="text-2xl font-bold cursor-pointer">AT</div>
        </Link>
      </div>
      {/* CASE STUDY */}
      <section className="flex flex-col justify-start px-6 md:px-12 lg:px-[20%] gap-12 py-6 pt-18">
        {/* Cover Image */}
        <div className="mt-6">
          <img
            src={coverPhoto}
            alt="MedGuard Overview Image"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        {/* Title & Overview */}
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight text-white">
            MedGuard – An AI-Powered Oil Spill Detection and Monitoring Solution
          </h1>
          <p className="text-xl text-text-secondary">
            MedGuard is a prototype AI solution developed to detect oil spills
            in the Mediterranean Sea using SAR satellite imagery and deep
            learning. We designed and trained a custom segmentation model and
            built a static web platform to visualize detected spills and trigger
            alerts in case of emergencies. This solution aims to support
            environmental protection and improve response coordination for local
            stakeholders in Tunisia.
          </p>
        </div>
        <hr className="bg-border h-[1px] outline-none border-none" />

        {/* Context of this Challenge */}
        <div className="flex flex-col gap-y-6">
          <h2 className="text-[3rem] text-white font-medium">
            Context of the Challenge :
          </h2>
          <div className="flex flex-col-reverse justify-center items-center gap-y-6 md:flex-row md:gap-x-12">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xl text-text-secondary">
                This project was part of the{" "}
                <strong className="text-white hover:underline">
                  AESS (Aerospace and Electronic Systems Society)
                </strong>{" "}
                Technical Challenge during the{" "}
                <strong className="text-white hover:underline cursor-pointer">
                  <a href="https://tsyp.ieee.tn" target="_blank" rel="noopener noreferrer">IEEE TSYP12 National Congress.{" "}</a>
                </strong>
                <br />
                <br /> The main goal of this challenge was to inspire and
                challenge participants to develop innovative solutions that
                leverage space technologies for practical and beneficial uses on
                Earth. The aim was to bridge the gap between space exploration
                advancements and terrestrial applications, fostering a new wave
                of technological integration for societal and environmental
                benefits.
              </p>
              <div className="bg-white text-background px-4 py-2 rounded-lg mt-8 w-fit">
                <a
                  href="https://drive.google.com/file/d/1_FCYJ4iUeCgMqsLqbAN0lmlQQi8SNN3M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-lg"
                >
                  Learn more
                </a>
              </div>
            </div>
            <img
              alt="TSYP12 AESS Technical Challenge"
              src={AESSLogo}
              className="h-[300px]  rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Our Approach and Problem Discovery */}
        <div>
          <h2 className="md:text-[3rem] text-[2.4rem] text-white font-medium leading-tight">
            Our Approach and Problem Discovery :
          </h2>
          <p className="text-xl text-text-secondary mt-4">
            We explored the vast potential of satellite imagery and remote
            sensing. We focused on{" "}
            <strong className="text-white">
              Synthetic Aperture Radar (SAR)
            </strong>{" "}
            technology, known for its capability to penetrate clouds and operate
            day and night, making it ideal for maritime monitoring. SAR images
            capture dark spots that are often associated with oil spills due to
            their low backscatter from slick surfaces.
            <br />
            <br /> However,these dark spots can be deceptive. Environmental
            factors like wind, wave conditions, or even natural phenomena such
            as algal blooms can create look-alike patterns, leading to false
            positives.
          </p>
          <div className="my-6 flex flex-col justify-center items-center">
            <img
              src={oilSpill}
              alt="Example of Oil Spill Detected in SAR Image"
              className="rounded-lg object-cover md:h-[500px]"
            />
            <p className="text-xl text-center text-text-secondary mt-4">
              - Example of Oil Spill Detected in SAR Image -
            </p>
          </div>
        </div>

        {/* Technical Overview */}
        <div className="flex flex-col gap-y-6">
          <h2 className="md:text-[3rem] text-[2.4rem] text-white font-medium">
            Technical Overview :
          </h2>
          <p className="text-xl text-text-secondary mt-4">
            <strong className="text-white">MedGuard</strong> was our solution –
            an AI-powered system designed to detect oil spills early, whether
            caused by ship accidents or illegal discharges. Our primary focus
            was on fast detection of oil spills to enable fast, effective
            responses.
            <br />
            <br />
            <strong className="text-white">Dataset & Preprocessing:</strong> We
            used SAR images from the Sentinel-1 satellite, which offers
            high-resolution, Level-1 GRD (Ground Range Detected) data. The
            dataset we used was already provided as 256×256 patches, each
            composed of a preprocessed (calibrated and filtered) raw SAR image
            and its corresponding ground truth mask (GTM).
            {/* Dataset */}
            <div className="md:px-[10%] px-4 mt-6">
              <img
                alt="Dataset"
                src={dataset}
                className="object-cover rounded-lg mt-4"
              />
            </div>
            <br />
            <br />
            <strong className="text-white">Model Architecture:</strong> We
            implemented a{" "}
            <em>Conditional Generative Adversarial Network (CGAN) </em>
            inspired by this Article{" "}
            <a
              href="https://www.tandfonline.com/doi/full/10.1080/19475705.2022.2155998#abstract"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline ml-1"
            >
              Deep neural network for oil spill detection using Sentinel-1 data:
              application to Egyptian coastal regions
            </a>
            <br />
            <br />
            Our <b className="text-white">CGAN</b> included:
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong className="text-white">Generator:</strong> A SegNet-like
                architecture that predicts segmentation masks for oil spills.
              </li>
              <li>
                <strong className="text-white">Discriminator:</strong> A
                PatchGAN model that refines predictions by distinguishing real
                from generated masks.
              </li>
            </ul>
            We combined adversarial loss with L1 loss to ensure both visual
            quality and precise segmentation. This approach helped detect actual
            oil spills while reducing false positives from environmental
            artifacts.
          </p>
          <div className="my-6 bg-white p-4 md:mx-[10%] rounded-lg ">
            <img
              src={modelArchitecture}
              alt="CGAN Architecture & Web Platform Dashboard"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        {/* Web Platform */}
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[3rem] text-white font-medium">Web Platform</h2>
          <p className="text-xl text-text-secondary">
            MedGuard is a static prototype, serving as a proof-of-concept for
            maritime oil spill detection.
          </p>

          <div>
            <p className="text-[1.5rem] text-white font-medium">Dashboard :</p>
            <img
              src={dashboard}
              alt=" Web Platform Dashboard"
              className="rounded-lg object-contain md:h-[400px]"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[3rem] text-white font-medium">
            Training Results
          </h2>

          <div className="mt-6">
            <p className="text-xl text-text-secondary mt-2">
              While our model demonstrated strong performance on training data,
              validation revealed critical gaps:
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 text-xl text-text-secondary">
              <li>
                <strong className="text-white">Overfitting:</strong> The model
                struggled to generalize to unseen SAR images, highlighting the
                need for better regularization.
              </li>
              <li>
                <strong className="text-white">
                  Data Augmentation & Regularization:
                </strong>{" "}
                Our pipeline lacked robust techniques to improve generalization.
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-border h-[1px] outline-none border-none" />

        {/* Conclusion */}
        <div>
          <h2 className="text-[3rem] text-white font-medium">Conclusion</h2>
          <p className="text-xl text-text-secondary">
            MedGuard represents a foundational step toward AI-driven
            environmental stewardship. While the prototype faces accuracy
            limitations, it underscores the potential of combining SAR imagery
            with deep learning for rapid spill detection. Future iterations
            could real-time weather feeds, and stakeholder feedback to reduce
            false alarms and prioritize high-risk zones.
            <br />
            <br />
            Finally, this project was a true collaborative effort—none of it
            would have been possible without the teamwork and dedication of my
            talented teammates:{" "}
            <strong className="text-white hover:underline">
              <a
                href="https://www.linkedin.com/in/oumayma-hammami111/"
                target="_blank"
              >
                Oumayma Hammami
              </a>
            </strong>
            , <strong className="text-white hover:underline "><a href="https://www.linkedin.com/in/nada-ben-abdelhafidh-859b12354/" target="_blank">Nada Ben Abdelhafidh</a></strong>, and{" "}
            <strong className="text-white hover:underline cursor-pointer">Atef Regaya</strong>. Their
            contributions and commitment were invaluable throughout this
            journey.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 w-fit">
          <a
            href="https://github.com/AhmedTrb/MedGuard-Oil-Spill-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex items-center gap-x-2 text-white border-2 border-border px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            <img alt="GitHub" src={githubIcon} className="w-6 h-6" />
            GitHub
          </a>
        </div>
      </section>

      <footer className="flex justify-center items-center w-full h-12 bg-background text-text-secondary border-t-1 border-border">
        <p>© 2025 Ahmed Trabelsi. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}
