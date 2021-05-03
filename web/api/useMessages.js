import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "http://localhost:3000/graphql";

function useMessages() {
  return useQuery("messages", async () => {
    const {
      messages: { data },
    } = await request(
      endpoint,
      gql`
        query {
          messages {
            id
            username
            msg
          }
        }
      `
    );
    return data;
  });
}

export default useMessages;
