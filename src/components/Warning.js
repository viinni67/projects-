import React from 'react'

function Warning(prop) {
  return (
  <div style={{height: '50px'}}>
    {prop.alert && <div>
        
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{prop.alert.typ}</strong> :{prop.alert.msg}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    </div>}
  </div>
  )
}

export default Warning
