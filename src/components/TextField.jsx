function TextField({ label, variant, defaultValue, size, classes, ...props }) {
  return (
    <>
      {label && (
        <label
          htmlFor="input-label"
          className="py-2 block leading-tight font-medium"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`py-2 px-3 block w-full rounded appearance-none border leading-tight focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${classes}`}
        placeholder={defaultValue}
      />
    </>
  );
}

export default TextField;
