import { useMemo } from "react";
import HeroPageLayout, {
  iHeroPageLayout,
} from "../../components/HeroPageLayout/HeroPageLayout";
import swoosh1 from "../../assets/Swoosh2.png";
import swoosh3 from "../../assets/Swoosh.png";
import dashboardMockup from "../../assets/Dashboard_mockup.png";
import phone2 from "../../assets/Racing-Mockup.png";
import phone3 from "../../assets/Three-Phones-Mockup.png";

const imageList = [
  dashboardMockup,
  phone2,
  phone3
];

const DesignerPage = () => {
  const heroPageLayout: iHeroPageLayout = useMemo(
    () => ({
      components: [
        {
          id: "text-image-component",
          type: "left-text-right-image-component",
          commonProps: {
            layoutClassName: 'left-text-right-image-component'
          },
          components: [
            {
              label: "UI/UX Design",
              subLabel: "Collaborative Storytelling",
              body: `Crafting a visual experience that empowers users and your business.`,
              id: "left-text-text",
              type: "text",
              components: [
                {
                  id: "button-left-text",
                  label: "Learn More",
                  type: "button",
                  onClick: () => {
                    // enqueueSnackbar('Thank you for testing this website!');
                  },
                },
              ],
            },
            ...imageList.map((image, i) => ({
              id: `image-${i}`,
              commonProps: {
                style: {
                  backgroundImage: `url(${image})`,
                },
              }
            })),
          ],
        },
        {
          id: "four-square-1",
          type: "four-square",
          commonProps: {
            style: {
              backgroundImage: `url(${swoosh3})`,
            },
          },
          components: [
            {
              label: "Brands",
              subLabel:
                "Drive sales and brand loyalty by unifying efforts across every channel partner and place you are sold.",
              id: "label 1",
              type: "text",
              commonProps: {
                className: "dark",
              },
            },
            {
              label: "Resellers & Agencies",
              subLabel: `Multiply your team's efforts and minimize errors with automation that streamlines how campaigns are built, optimized, managed, and reported.`,
              id: "label 2",
              type: "text",
              commonProps: {
                className: "background-theme-primary",
              },
            },
            {
              label: "Industries",
              subLabel:
                "Versatile marketing tools enable our platform to support the needs of multiple industries, use cases, and business models.",
              id: "label 3",
              type: "text",
              commonProps: {
                className: "background-theme-secondary",
              },
            },
            {
              label: "Our Story",
              subLabel:
                "From our first line of code and onward, This Company has obsessively focused on removing friction from the social advertising process to enable local activation at scale.",
              id: "label 4",
              type: "text",
              commonProps: {
                className: "dark",
              },
            },
          ],
        },
        {
          id: "four-square-1",
          type: "slide-row-component",
          commonProps: {
            style: {
              backgroundImage: `url(${swoosh1})`,
            },
          },
          components: [
            {
              subLabel: "Brands",
              body: "Drive sales and brand loyalty by unifying efforts across every channel partner and place you are sold.",
              id: "label 5",
              type: "text",
            },
            {
              subLabel: "Resellers & Agencies",
              body: `Multiply your team's efforts and minimize errors with automation that streamlines how campaigns are built, optimized, managed, and reported.`,
              id: "label 6",
              type: "text",
            },
          ],
        },
        
      ],
    }),
    []
  );
  return <HeroPageLayout heroPageLayout={heroPageLayout} />;
};
export default DesignerPage;
