export default ({ Vue}) => {
    Vue.filter('replaceSpaceWithDash', function (value) {
        return value.replaceAll(" ", "-");
    });
}