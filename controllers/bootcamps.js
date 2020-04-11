// @desc  Get  bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamp' });
}
// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamp' });
}
// @desc  Create bootcamps
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamp' });
}
// @desc  Update bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}
// @desc  Delete bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}
