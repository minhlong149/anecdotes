export const Anecdote = ({ anecdote }) => {
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
