import { useRouter } from "next/router";

const BlogPage = () => {

    const router = useRouter();
    console.log(router.query);

    // returns anything after /blog/..... in array format as a catch all
    // http://localhost:3000/blog/2020/12 => slug: (2) ['2020', '12']
    // then we can target the year and output all posts with that keyword

    return (
        <div>
            <h2>This is the blog template catch all page</h2>
        </div>
    );
}

export default BlogPage;