

  export default function paginate(array, page_size, page_number) {
    return array.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );
  }


  //   const itemCounter = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

//   export { paginate };