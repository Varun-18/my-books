import Image from "next/image";

/**
 * This is a spinner component for the project that will be displayed when the data fetching is in progress
 *
 * @returns A spinner
 */
const Spinner = () => {
  return (
    <div class="h-screen bg-white">
      <div class="flex justify-center items-center h-full">
        <Image
          class="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt="loader"
          height={250}
          width={250}
        />
      </div>
    </div>
  );
};

export default Spinner;
