
export const withLoading = (Component) => {
  function ComponentWithLoading (props) {
    if (props.items.length < 1) {
      return <div>carganding...</div>
    }

    return <Component {...props} />
  }

  return ComponentWithLoading
}
