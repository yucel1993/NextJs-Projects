import LocalSearchbar from "@/components/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";

// const questions = [
//   {
//     _id: "1",
//     title: "How to Create Interfaces in TypeScript?",
//     tags: [
//       { _id: "tag1", name: "TypeScript" },
//       { _id: "tag2", name: "Interfaces" },
//     ],
//     author: {
//       _id: "author1",
//       name: "John Doe",
//       picture: "john-doe.jpg",
//     },

//     upvotes: 10,
//     views: 150,
//     answers: [],
//     createdAt: new Date("2023-10-23"),
//   },
//   {
//     _id: "2",
//     title: "Getting Started with React Hooks",
//     tags: [
//       { _id: "tag3", name: "React" },
//       { _id: "tag4", name: "Hooks" },
//     ],
//     author: {
//       _id: "author2",
//       name: "Jane Smith",
//       picture: "jane-smith.jpg",
//     },
//     upvotes: 5,
//     views: 75,
//     answers: [],
//     createdAt: new Date("2023-9-24"),
//   },
//   {
//     _id: "3",
//     title: "Node.js REST API Best Practices",
//     tags: [
//       { _id: "tag5", name: "Node.js" },
//       { _id: "tag6", name: "REST" },
//     ],
//     author: {
//       _id: "author3",
//       name: "Mike Johnson",
//       picture: "mike-johnson.jpg",
//     },
//     upvotes: 8,
//     views: 100,
//     answers: [],
//     createdAt: new Date("2023-10-20"),
//   },
// ];

export default async function Home() {
  const result = await getQuestions({});

  console.log(result.questions);

  return (
    <>
      <div className="flex w-full  items-center justify-between gap-4  sm:flex-row">
        <h1 className="h1-bold text-dark100_light900 whitespace-nowrap">
          All Questions
        </h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient text-light-900 min-h-[46px] px-4 py-3">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          filters={HomePageFilters}
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions?.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              answers={question.answers}
              upvotes={question.upvotes}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
