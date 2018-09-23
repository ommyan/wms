webpackJsonp([55],{1589:function(e,n){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\x3c!-- MAIN CONTENT --\x3e\n<div id="content">\n    <div class="alert alert-block alert-info" data-dismiss="alert">\n        <h4 class="alert-heading">Please Note!</h4>\n\n        <p>\n            This page only shows various form element states for error and success. For a full list of error validations and\n            examples click on the link below to go to the <strong>Smart Form Layouts</strong> page\n        </p>\n        <br>\n        <a href="#/forms/layouts" class="btn btn-primary"><strong><i class="fa fa-arrow-circle-right"></i> Form Layouts\n            Page </strong></a>\n    </div>\n\n    \x3c!-- widget grid --\x3e\n    <section id="widget-grid">\n\n        \x3c!-- row --\x3e\n        <div class="row">\n\n            \x3c!-- NEW WIDGET START --\x3e\n            <article class="col-sm-12 col-md-12 col-lg-6">\n\n                \x3c!-- Widget ID (each widget will need unique ID)--\x3e\n                <div class="jarviswidget" id="wid-id-0" data-widget-colorbutton="false" data-widget-editbutton="false">\n                    \x3c!-- widget options:\n                        usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">\n                        \n                        data-widget-colorbutton="false"\t\n                        data-widget-editbutton="false"\n                        data-widget-togglebutton="false"\n                        data-widget-deletebutton="false"\n                        data-widget-fullscreenbutton="false"\n                        data-widget-custombutton="false"\n                        data-widget-collapsed="true" \n                        data-widget-sortable="false"\n                        \n                    --\x3e\n                    <header>\n                        <span class="widget-icon"> <i class="fa fa-exclamation txt-color-red"></i> </span>\n\n                        <h2>Error States </h2>\n\n                    </header>\n\n                    \x3c!-- widget div--\x3e\n                    <div>\n\n\n                        \x3c!-- widget content --\x3e\n                        <div class="widget-body no-padding">\n\n                            \x3c!-- Error states for elements --\x3e\n                            <form class="smart-form">\n                                <header>Error states for elements</header>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Text input</label>\n                                        <label class="input state-error">\n                                            <input type="text">\n                                        </label>\n\n                                        <div class="note note-error">This is a required field.</div>\n                                    </section>\n\n                                    <section>\n                                        <label class="label">File input</label>\n\n                                        <div class="input input-file state-error">\n                                <span class="button"><input type="file" id="file2"\n                                                            onchange="this.parentNode.nextSibling.value = this.value">Browse</span><input\n                                                type="text" readonly>\n                                        </div>\n                                        <div class="note note-error">File size must be less than 3Mb.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Select</label>\n                                        <label class="select state-error">\n                                            <select>\n                                                <option value="0">Choose name</option>\n                                                <option value="1">Alexandra</option>\n                                                <option value="2">Alice</option>\n                                                <option value="3">Anastasia</option>\n                                                <option value="4">Avelina</option>\n                                            </select>\n                                            <i></i>\n                                        </label>\n\n                                        <div class="note note-error">You must select an option.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Textarea</label>\n                                        <label class="textarea state-error">\n                                            <textarea rows="3"></textarea>\n                                        </label>\n\n                                        <div class="note note-error">This is a required field.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Radios</label>\n\n                                        <div class="row">\n                                            <div class="col col-4">\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Alexandra</label>\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Alice</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Avelina</label>\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Basilia</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Cassandra</label>\n                                                <label class="radio state-error"><input type="radio"\n                                                                                        name="radio"><i></i>Clemencia</label>\n                                            </div>\n                                        </div>\n                                        <div class="note note-error">You must select one option.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Checkboxes</label>\n\n                                        <div class="row">\n                                            <div class="col col-4">\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Alexandra</label>\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Alice</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Avelina</label>\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Basilia</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Cassandra</label>\n                                                <label class="checkbox state-error"><input type="checkbox" name="checkbox"><i></i>Clemencia</label>\n                                            </div>\n                                        </div>\n                                        <div class="note note-error">You must select at least one option.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <div class="row">\n                                        <section class="col col-5">\n                                            <label class="label">Toggles based on radios</label>\n                                            <label class="toggle state-error"><input type="radio" name="radio-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Alexandra</label>\n                                            <label class="toggle state-error"><input type="radio" name="radio-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Anastasia</label>\n                                            <label class="toggle state-error"><input type="radio" name="radio-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Avelina</label>\n\n                                            <div class="note note-error">You must select one option.</div>\n                                        </section>\n\n                                        <div class="col col-2"></div>\n\n                                        <section class="col col-5">\n                                            <label class="label">Toggles based on checkboxes</label>\n                                            <label class="toggle state-error"><input type="checkbox" name="checkbox-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Cassandra</label>\n                                            <label class="toggle state-error"><input type="checkbox" name="checkbox-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Clemencia</label>\n                                            <label class="toggle state-error"><input type="checkbox" name="checkbox-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Desiderata</label>\n\n                                            <div class="note note-error">You must select at least one option.</div>\n                                        </section>\n                                    </div>\n                                </fieldset>\n\n                                <footer>\n                                    <button type="submit" class="btn btn-primary">Submit</button>\n                                    <button type="button" class="btn btn-default" onclick="window.history.back();">Back</button>\n                                </footer>\n                            </form>\n                            \x3c!--/ Error states for elements --\x3e\n\n                        </div>\n                        \x3c!-- end widget content --\x3e\n\n                    </div>\n                    \x3c!-- end widget div --\x3e\n\n                </div>\n                \x3c!-- end widget --\x3e\n\n            </article>\n            \x3c!-- WIDGET END --\x3e\n\n            \x3c!-- NEW WIDGET START --\x3e\n            <article class="col-sm-12 col-md-12 col-lg-6">\n\n                \x3c!-- Widget ID (each widget will need unique ID)--\x3e\n                <div class="jarviswidget" id="wid-id-2" data-widget-colorbutton="false" data-widget-editbutton="false">\n                    \x3c!-- widget options:\n                        usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">\n                        \n                        data-widget-colorbutton="false"\t\n                        data-widget-editbutton="false"\n                        data-widget-togglebutton="false"\n                        data-widget-deletebutton="false"\n                        data-widget-fullscreenbutton="false"\n                        data-widget-custombutton="false"\n                        data-widget-collapsed="true" \n                        data-widget-sortable="false"\n                        \n                    --\x3e\n                    <header>\n                        <span class="widget-icon"> <i class="fa fa-check txt-color-green"></i> </span>\n\n                        <h2>Success States </h2>\n\n                    </header>\n\n                    \x3c!-- widget div--\x3e\n                    <div>\n\n                        \x3c!-- widget content --\x3e\n                        <div class="widget-body no-padding">\n\n                            \x3c!-- Success states for elements --\x3e\n                            <form class="smart-form">\n                                <header>Success states for elements</header>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Text input</label>\n                                        <label class="input state-success">\n                                            <input type="text">\n                                        </label>\n\n                                        <div class="note note-success">This is a required field.</div>\n                                    </section>\n\n                                    <section>\n                                        <label class="label">File input</label>\n\n                                        <div class="input input-file state-success">\n                                <span class="button"><input type="file" id="file"\n                                                            onchange="this.parentNode.nextSibling.value = this.value">Browse</span><input\n                                                type="text" readonly>\n                                        </div>\n                                        <div class="note note-success">This is a required field.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Select</label>\n                                        <label class="select state-success">\n                                            <select>\n                                                <option value="0">Choose name</option>\n                                                <option value="1">Alexandra</option>\n                                                <option value="2">Alice</option>\n                                                <option value="3" selected>Anastasia</option>\n                                                <option value="4">Avelina</option>\n                                            </select>\n                                            <i></i>\n                                        </label>\n\n                                        <div class="note note-success">Thanks for your selection.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Textarea</label>\n                                        <label class="textarea state-success">\n                                            <textarea rows="3"></textarea>\n                                        </label>\n\n                                        <div class="note note-success">Thanks for your text.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Radios</label>\n\n                                        <div class="row">\n                                            <div class="col col-4">\n                                                <label class="radio state-success"><input type="radio" name="radio"><i></i>Alexandra</label>\n                                                <label class="radio state-success"><input type="radio"\n                                                                                          name="radio"><i></i>Alice</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="radio state-success"><input type="radio" name="radio" checked><i></i>Avelina</label>\n                                                <label class="radio state-success"><input type="radio"\n                                                                                          name="radio"><i></i>Basilia</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="radio state-success"><input type="radio" name="radio"><i></i>Cassandra</label>\n                                                <label class="radio state-success"><input type="radio" name="radio"><i></i>Clemencia</label>\n                                            </div>\n                                        </div>\n                                        <div class="note note-success">Thanks for your selection.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <section>\n                                        <label class="label">Checkboxes</label>\n\n                                        <div class="row">\n                                            <div class="col col-4">\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"><i></i>Alexandra</label>\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"\n                                                                                             checked><i></i>Alice</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"><i></i>Avelina</label>\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"><i></i>Basilia</label>\n                                            </div>\n                                            <div class="col col-4">\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"\n                                                                                             checked><i></i>Cassandra</label>\n                                                <label class="checkbox state-success"><input type="checkbox" name="checkbox"><i></i>Clemencia</label>\n                                            </div>\n                                        </div>\n                                        <div class="note note-success">Thanks for your selection.</div>\n                                    </section>\n                                </fieldset>\n\n                                <fieldset>\n                                    <div class="row">\n                                        <section class="col col-5">\n                                            <label class="label">Toggles based on radios</label>\n                                            <label class="toggle state-success"><input type="radio" name="radio-toggle" checked><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Alexandra</label>\n                                            <label class="toggle state-success"><input type="radio" name="radio-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Anastasia</label>\n                                            <label class="toggle state-success"><input type="radio" name="radio-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Avelina</label>\n\n                                            <div class="note note-success">Thanks for your selection.</div>\n                                        </section>\n\n                                        <div class="col col-2"></div>\n\n                                        <section class="col col-5">\n                                            <label class="label">Toggles based on checkboxes</label>\n                                            <label class="toggle state-success"><input type="checkbox" name="checkbox-toggle"\n                                                                                       checked><i data-swchon-text="ON"\n                                                                                                  data-swchoff-text="OFF"></i>Cassandra</label>\n                                            <label class="toggle state-success"><input type="checkbox" name="checkbox-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Clemencia</label>\n                                            <label class="toggle state-success"><input type="checkbox" name="checkbox-toggle"><i\n                                                    data-swchon-text="ON" data-swchoff-text="OFF"></i>Desiderata</label>\n\n                                            <div class="note note-success">Thanks for your selection.</div>\n                                        </section>\n                                    </div>\n                                </fieldset>\n\n                                <footer>\n                                    <button type="submit" class="btn btn-primary">Submit</button>\n                                    <button type="button" class="btn btn-default" onclick="window.history.back();">Back</button>\n                                </footer>\n                            </form>\n                            \x3c!--/ Success states for elements --\x3e\n\n                        </div>\n                        \x3c!-- end widget content --\x3e\n\n                    </div>\n                    \x3c!-- end widget div --\x3e\n\n                </div>\n                \x3c!-- end widget --\x3e\n\n            </article>\n            \x3c!-- WIDGET END --\x3e\n\n        </div>\n\n        \x3c!-- end row --\x3e\n\n    </section>\n    \x3c!-- end widget grid --\x3e\n\n\n</div>\n\x3c!-- END MAIN CONTENT --\x3e\n</body>\n</html>'}});