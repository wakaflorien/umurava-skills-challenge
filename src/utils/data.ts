export const usersData = Array.from({ length: 9 }).map((_, index) => ({
    key: index,
    image: `/play.svg`,
    name: 'Manzi Jac',
    location: 'Kigali',
    jobTitle: 'Product Designer',
    imageWidth: 40,
    imageHeight: 40,
  }));

  export const hackathonsData = Array.from({ length: 16 }).map((_, index) => ({
      status: index % 2 === 0 ? 'Open' : index % 3 === 0 ? 'Ongoing' : 'Completed',
      id: index + 1,
      image: `/white_logo.png`,
      title: 'Design a Dashboard for SokoFund, FiniTech Product',
      skills: ["UI/UX Design", "User Research", "Product Design"],
      security: '(Junior, Intermediate, Senior)',
      timeline: '15 Days',
      onClick: () => console.log("View Challenge"),
      imageWidth: 150,
      imageHeight: 50
  }));
  