import { useParams } from "react-router-dom";

export const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find((n) => n.id === Number(id));
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>
        has {anecdote.votes} vote{anecdote.votes > 1 ? "s" : ""}
      </p>
      <p>
        for more info, see <a href={anecdote.info}>{anecdote.info}</a>
      </p>
    </div>
  );
};
