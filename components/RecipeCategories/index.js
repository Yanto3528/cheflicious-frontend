import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import RecipeList from "../Recipe/RecipeList";
import BackLink from "../../styles/shared/BackLink";

const RecipeCategories = (props) => {
  const router = useRouter();
  return (
    <main>
      <BackLink onClick={() => router.back()}>&larr; Go back</BackLink>
      <RecipeList
        {...props}
        url={`/api/recipes/categories/${router.query.slug}`}
      />
    </main>
  );
};

export default RecipeCategories;
