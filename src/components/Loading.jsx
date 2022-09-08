export const Loading = () => {
  return (
    <div className="m-0 vh-100 row justify-content-center aling-item-center">
      <div
        className="spinner-border text-light col-auto text-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
