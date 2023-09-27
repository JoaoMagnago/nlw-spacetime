export const Copyright = () => {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{" "}
      <a
        href="https://rocketseat.com.br"
        target="_blank"
        rel="noreffered" // prevents cross site scripting
        className="underline hover:text-gray-100"
      >
        Rocketseat
      </a>
    </div>
  );
};
