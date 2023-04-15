import { useRouter } from "next/router";

const aboutItem = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>About {slug}</h1>
    </div>
  );
};

export default aboutItem;
