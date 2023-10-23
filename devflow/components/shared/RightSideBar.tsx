import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use express as a custom hook" },
    { _id: 2, title: "How do I use express as a custom hook" },
    { _id: 3, title: "How do I use express as a custom hookasdadada" },
    {
      _id: 4,
      title:
        "How do I use express as a custom hook lorem  dfaffasfsafsaf fdaf dsfd",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "Javascript",
      totalQuestions: 5,
    },
    {
      _id: 2,
      name: "Javascript",
      totalQuestions: 10,
    },
    {
      _id: 3,
      name: "Javascript",
      totalQuestions: 123,
    },
    {
      _id: 4,
      name: "Javascript",
      totalQuestions: 5,
    },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question, i) => (
            <Link
              href={`/questions/${question._id}`}
              key={i}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium  text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag, i) => (
            <RenderTag
              key={i}
              _id={tag._id}
              totalQuestions={tag.totalQuestions}
              name={tag.name}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
