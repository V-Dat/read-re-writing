export const UserIcon = (props: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.6"
      height="30"
      viewBox="0 0 29.6 30"
    >
      <path
        id="Icon_material-account-circle"
        data-name="Icon material-account-circle"
        d="M17.8,3A14.906,14.906,0,0,0,3,18,14.906,14.906,0,0,0,17.8,33,14.906,14.906,0,0,0,32.6,18,14.906,14.906,0,0,0,17.8,3Zm0,4.5A4.5,4.5,0,1,1,13.36,12,4.464,4.464,0,0,1,17.8,7.5Zm0,21.3a10.621,10.621,0,0,1-8.88-4.83c.044-2.985,5.92-4.62,8.88-4.62s8.836,1.635,8.88,4.62A10.621,10.621,0,0,1,17.8,28.8Z"
        transform="translate(-3 -3)"
        fill={props.color}
      />
    </svg>
  );
};
