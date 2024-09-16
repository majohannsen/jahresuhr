import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Clock } from "~/components/clock";

function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default component$(() => {
  const seconds = (time: Date) =>
    time.getSeconds() + time.getMilliseconds() / 1000;
  const minutes = (time: Date) => time.getMinutes() + seconds(time) / 60;
  const hours = (time: Date) => time.getHours() + minutes(time) / 60;
  const weekdays = (time: Date) => time.getDay() - 1 + hours(time) / 24; // Monday = 1 => 0
  const days = (time: Date) => time.getDate() - 1 + hours(time) / 24; // first day = 1 => 0
  const months = (time: Date) =>
    time.getMonth() + days(time) / daysInMonth(time);

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl text-center font-bold mb-8">Jahresuhr</h1>
      <div class="mx-auto relative h-96 w-96 sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
        <Clock
          value={months(new Date())}
          range={12}
          padding={0}
          duration={60 * 60 * 12 * 365}
        />
        <Clock
          value={days(new Date())}
          range={daysInMonth(new Date())}
          padding={30}
          duration={60 * 60 * 12 * daysInMonth(new Date())}
        />
        <Clock
          value={weekdays(new Date())}
          range={7}
          padding={60}
          duration={60 * 60 * 12 * 7}
        />
        <Clock
          value={hours(new Date())}
          range={12}
          padding={90}
          duration={60 * 60 * 12}
        />
        <Clock
          value={minutes(new Date())}
          range={60}
          padding={120}
          duration={60 * 60}
        />
        <Clock
          value={seconds(new Date())}
          range={60}
          padding={150}
          duration={60}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jahresuhr",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
