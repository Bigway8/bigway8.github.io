import React from 'react'

export default function Users() {
  return (
    <>
      <h3>пользователи</h3>
      <div style={styles.a}>
        <table></table>
      </div>
    </>
  )
}

/*
{
about: null
age: 31
city: "Saint-Petersburg"
country: "Russia"
email: null
galleryUrl: null
id: "629e6eddc22cf415c0bace0d"
mainPhotoUrl: null
phone: null
sex: "MALE"
username: "amberize"
}
*/

const styles = {
  a: {
    position: 'relative',
    height: 'auto',
    overflow: 'auto',
  },
  table: {
    outline: 'none',
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0px',
    tableLayout: 'fixed',
  },
  thead: {
    display: 'table-header-group',
  },
  theadtr: {
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: ' 0px',
  },
}
