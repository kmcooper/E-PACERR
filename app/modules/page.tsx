"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";
import LoadingScreen from "../loading";

const modules = [
  { /* Module 1 */
    title: "Introducing Reproducibility in Bioinformatics", 
    description:
      "This module explores the key principles of the Scientific Method, a fundamental approach used by scientists to conduct research and answer complex questions. Learn how to formulate hypotheses, design experiments, gather and analyze data, and draw meaningful conclusions within the scientific community.",
    learningGoal: "Exploring the Scientific Method",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826925",
  },
  { /* Module 2 */
    title: "Exploring Reproducibility in Bioinformatics",
    description:
      "This material explores reproducibility in bioinformatics, covering topics like using others' code, running software pipelines, and understanding published Methods sections of published papers. Reproducibility involves achieving consistent results across different experiments, locations, and instruments without necessitating new software tools. It's about obtaining consistent outcomes using the same data and code as the original study, applicable to various contexts in bioinformatics, from experimental performance to data management.",
    learningGoal: "How to Identify the Fundamental Tenets of Reproducibility",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1811699",
  },
  { /* Module 3 */
    title: "Data Management in Bioinformatics",
    description:
      "This learning material covers the essentials of reproducibility in bioinformatics, emphasizing the importance of sharing both data and code for replication. It highlights the need for training in ethics, responsible research, and historical context within bioinformatics education, stressing the value of fostering a culture of responsible research. The module also outlines good practices for code and data management, including open access, documentation, licensing, and compliance.",
    learningGoal: "Identify the Impact of Creating Reproducible Bioinformatics Analyses",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826932",
  },
  { /* Module 4 */
    title: "Code Management in Bioinformatics",
    description:
      "This module emphasizes enhancing code accessibility through readability and comprehension, stressing the vital role of clear documentation, comments, and adherence to style guides. It also underscores the value of code sharing for reusability and collaborative efforts, advocating platforms like GitHub and Bitbucket for hosting code repositories that include commented and well-structured code, licenses, README files, and contact information.",
    learningGoal: "Introduction to E-PACERR",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826933",
  },
  // { /* Module 5 */
  //   title: "Case Studies for Resposible Research in Bioinformatics",
  //   description:
  //     "Cras adipiscing enim eu turpis egestas. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Proin fermentum leo vel orci. Bibendum ut tristique et egestas quis.",
  //   learningGoal: "What is Bioinformatics?",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 6 */
  //   title: "Databases and Reproducible Data Mining in Bioinformatics",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 7 */
  //   title: "Best Practices for Data Sharing in Bioinformatics",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 8 */
  //   title: "Best Practices for Code Sharing in Bioinformatics",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 9 */
  //   title: "Standards for Excellence in Bioinformatics Education and Training",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 10 */
  //   title: "Advocacy in Bioinformatics Research and Education",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 11 */
  //   title: "Technical Writing Skills for Responsible Bioinformatics Communication",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
  // { /* Module 12 */
  //   title: "Professionalism in Bioinformatics",
  //   description:
  //     "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
  //   learningGoal: "To learn something valuable",
  //   thumbnail: stock1,
  //   link: "linkToCanvasModule.com",
  // },
];

const ModulesPage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 999px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="content">
        <LoadingScreen></LoadingScreen>
      </div>
    );
  }

  if (isLargeScreen) {
    return (
      <div className="content">
        <div className="buffer"></div>
        
        <div className="container">
          <div className="section-separater"></div>
          {modules.map((module, index) => (
            <div className="organizer">
              <div
                key={index}
                className={
                  index % 2 === 0 ? "module even-module" : "module odd-module"
                }
              >
                {index % 2 === 0 ? (
                  <>
                    <Image
                      className="moduleThumbnail left"
                      src={module.thumbnail}
                      alt={module.title}
                    />
                    <div className="moduleContent right">
                      <h2 className="moduleTitle">{module.title}</h2>
                      <h3 className="moduleGoal">{module.learningGoal}</h3>
                      <p className="moduleText">{module.description}</p>
                      <a className="link" target="_blank" href={module.link}>
                        Visit Module on Canvas
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="moduleContent left">
                      <h2 className="moduleTitle">{module.title}</h2>
                      <h3 className="moduleGoal">{module.learningGoal}</h3>
                      <p className="moduleText">{module.description}</p>
                      <a className="link" target="_blank" href={module.link}>
                        Visit Module on Canvas
                      </a>
                    </div>
                    <Image
                      className="moduleThumbnail right"
                      src={module.thumbnail}
                      alt={module.title}
                    />
                  </>
                )}
              </div>
              <div className="section-separater"></div>
            </div>
          ))}
        </div>
        <div className="buffer"></div>
      </div>
    );
  }
  if (!isLargeScreen) {
    return (
      <div className="content">
        <div className="buffer"></div>
        <div className="section-separater"></div>
        <div className="container">
          {modules.map((module, index) => (
            <div key={index} className="module">
              <>
                <Image
                  className="moduleThumbnail left"
                  src={module.thumbnail}
                  alt={module.title}
                />
                <div className="moduleContent right">
                  <h2 className="moduleTitle">{module.title}</h2>
                  <h3 className="moduleGoal">{module.learningGoal}</h3>
                  <p className="moduleText">{module.description}</p>
                  <a className="link" target="_blank" href={module.link}>
                    Visit Module on Canvas
                  </a>
                </div>
              </>
              <div className="section-separater"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ModulesPage;
