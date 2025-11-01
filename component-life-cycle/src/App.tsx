import React from 'react'
import LifecycleDemo from './component/ClassLifeCycleDomo'
import FunctionalLifeCycle from './component/FunctionalLifeCycleDemo'
import PostList from './component/PostList'
const App = () => {
  return (
    <>
      {/* <LifecycleDemo/> */}
      <FunctionalLifeCycle/>
      <PostList/>
    </>
  )
}
export default App