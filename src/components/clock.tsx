import { component$ } from "@builder.io/qwik";
interface Props {
  value: number;
  range: number;
  duration: number;
  padding: number;
}
export const Clock = component$(
  ({ value, range, duration, padding }: Props) => {
    return (
      <>
        <div
          class="absolute inset-0 w-full h-full"
          style={{ padding: padding }}
        >
          <div
            class="h-full w-full"
            style={{ transform: `rotate(${(value * 360) / range}deg)` }}
          >
            <div
              class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
              style={{ animationDuration: String(duration) + "s" }}
            >
              <div class="bg-black w-0.5 h-1/2"></div>
            </div>
          </div>

          {new Array(range).fill(0).map((v, i) => (
            <div
              key={i}
              class="absolute inset-0 h-full w-full flex flex-col items-center"
              style={{
                transform: `rotate(${(360 / range) * i}deg)`,
                padding: padding,
              }}
            >
              <div class="h-1 w-[1px] bg-black"></div>
              <p class="font-thin text-xs">{i}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
);
