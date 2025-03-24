export const Hey = ({ name, condition }) => (
  <h1>
    Hello {name.length > 5 ? name.toUpperCase() : name}
    {condition && <div>, ô personne incroyable</div>}
  </h1>
)