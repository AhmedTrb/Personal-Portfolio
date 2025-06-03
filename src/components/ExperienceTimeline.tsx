import { TimelineItem } from "./TimeLineItem";

import experiences from "../assets/experiences.json"

export function ExperienceTimeline() {
  return (
    <div className="relative">
  <div className="absolute left-6 h-full w-[2px] bg-[var(--color-text-secondary)]" />

  {/* Timeline items */}
  {experiences.map((experience, index) => (
    <TimelineItem
      key={index}
      experience={experience}
      index={index}
      isLast={index === experiences.length - 1}
    />
  ))}
</div>
  )
}
