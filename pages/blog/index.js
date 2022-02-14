
import { useRouter } from "next/router";

const BlogTemplatePage = () => {


    const router = useRouter();
    console.log(router.query);


    return (
        <div>
            <h2>This is the blog page</h2>
        </div>
    );
}

export default BlogPage;