import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";
// flex-grow for feed and sidebar and widget are fixed
// we can also use flex-[0.4], flex-[0.3], flex-[0.3]
function Feed() {
  const [posts, setPosts] = useState([]);
  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    // when screen size is small and for desktop xl:ml-[370px] margin from left from available width.
    <div className=' text-white flex-grow border-l
        border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
        {/* sticky : stick during scrolling and z-50 put other thing under sticky */}
        <div  className=' text-[#d9d9d9] flex items-center 
            sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black 
            border-b border-gray-700' >
            <h2 className='text-lg sm:text-xl font-bold'> Home </h2>
            <div className='hoverAnimation w-9 h-9 flex items-center justify-center
                xl:px-0 ml-auto'>
                    <SparklesIcon className='h-5 text-white' />
            </div>
        </div>

        <Input />
        <div className="pb-72">
          {posts.map((post) => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </div>

    </div>
  )
}

export default Feed;