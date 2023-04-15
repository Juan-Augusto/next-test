import { useRouter } from "next/router";

const itemDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Details for {slug}</h1>
    </div>
  );
};

export default itemDetails;
