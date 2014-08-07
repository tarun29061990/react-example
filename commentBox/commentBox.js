var CommentBox = React.createClass({
	render:function(){
		return(
			<div class="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});
React.renderComponent(
	<CommentBox data="comments.json"/>,
	document.getElementById('content')
);