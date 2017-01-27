import React from 'react'

const Markdown = ({ page }) => {
    return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: page }}/>
    </div>
    )
}

Markdown.propTypes = {
    page: React.PropTypes.string
}

export default Markdown
