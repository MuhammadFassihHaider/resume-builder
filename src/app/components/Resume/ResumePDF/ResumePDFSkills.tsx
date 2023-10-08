import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
  ResumeFeaturedSkill,
  ResumePDFText,
} from "components/Resume/ResumePDF/common";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeSkills } from "lib/redux/types";

export const ResumePDFSkills = ({
  heading,
  skills,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  skills: ResumeSkills;
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  const { technical, soft } = skills;

  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      <View>
        <ResumePDFText bold >Technical Skills</ResumePDFText>
        <ResumePDFBulletList
          items={technical}
          showBulletPoints={showBulletPoints}
          two_columns
        />
      </View>
      <View>
        <ResumePDFText bold >Soft Skills</ResumePDFText>
        <ResumePDFBulletList
          items={soft}
          showBulletPoints={showBulletPoints}
          two_columns
        />
      </View>
    </ResumePDFSection>
  );
};
