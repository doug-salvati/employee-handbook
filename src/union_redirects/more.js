window.onload = getInfo()

function addLeader(name, role, email) {
    var bold = document.createElement("b");
    var para = document.createElement("p");
    var bnode = document.createTextNode(role + ":");
    var pnode = document.createTextNode(name + "................(" + email + ")");
    bold.appendChild(bnode);
    para.appendChild(pnode);
    var belement = document.getElementById("leadership");
    var pelement = document.getElementById("leadership");
    belement.appendChild(bold);
    pelement.appendChild(para);
}

function viewPDF(document) {
    document = "../files/unions/" + document;
    localStorage.setItem("pdf", document);
    window.location = "../pdf_viewer.html";
}

function addLink(name, href) {
    var link = document.createElement("button");
    var text = document.createTextNode(name);
    link.setAttribute("class", "link");
    link.setAttribute("onclick", "viewPDF(" + href + ")");
    link.setAttribute("style", "display:inline");
    link.onclick = function () {viewPDF(href);};
    link.appendChild(text);
    var element = document.getElementById("more");
    element.appendChild(link);
    var linebreak = document.createElement("br");
    element.appendChild(linebreak);
}

function societyProfessors() {
    document.title = "Society of Professors";
    addLeader("Carol McDonough", "President", "Carol_McDonough@uml.edu");
    addLeader("Jay Simmons", "Vice President", "Jay_Simmons@uml.edu");
    addLeader("George Joseph", "Treasurer", "George_Joseph@uml.edu");
    addLeader("Carol Barry", "Secretary", "Carol_Barry@uml.edu");
    addLeader("Arnold O'Brien", "Grievance Coordinator", "Arnold_OBrien@uml.edu");
    addLeader("Levon Chorbajian", "Health and Welfare Representative", "Levon_Chorbajian@uml.edu");
    addLink("Salary Tables", "society_professors/salary_review.pdf");
    addLink("Professional Development", "society_professors/prof_dev.pdf");
}

function teamsters() {
    document.title = "University Police";
    addLeader("Jeff Connors", "Steward", "Jeffrey_Connors@uml.edu");
    addLeader("Scott Childs", "Steward", "Scott_Childs@uml.edu");
    addLink("Salary Tables", "teamsters/salary_tables.pdf");
    addLink("Side Letter of Agreement", "teamsters/side_letter.pdf");
    addLink("Sick Buyback Form", "teamsters/sick_buyback.pdf");
}

function seiu() {
    document.title = "SEIU Local 888";
    addLeader("Nicholas Piscitello", "President", "Nicholas_Piscitello@uml.edu");
    addLeader("Justin Lawler", "Vice President", "Justin_Lawler@uml.edu");
    addLeader("Penny Donoghue", "Chief Steward", "Pamela_Donoghue@uml.edu");
    addLeader("Ruairi O'Mahony", "Treasurer", "Ruairi_OMahony@uml.edu");
    addLeader("Susan Winning", "South Campus Area Representative", "Susan_Winning@uml.edu");
    addLeader("Rick Harvey", "Dental/Vision Questions Contact", "Richard_Harvey@uml.edu");
    addLink("Memos of Understanding", "seiu/memo_understanding.pdf");
    addLink("Salary Tables", "seiu/salary_tables.pdf");
    addLink("Sick Buyback Form", "seiu/sick_buyback.pdf");
}

function mtaClassified() {
    document.title = "Classified & Technical";
    addLeader("Christos Protonotarios", "President, Treasurer, & Secretary", "Christos_Protonotarios@uml.edu");
    addLeader("James Rossi", "Chief Steward", "James_Rossi@uml.edu");
    addLink("Salary Tables", "mta_classified/salary_tables.pdf");
    addLink("Sick Buyback Form", "mta_classified/sick_buyback.pdf");
}

function mtaMaintenance() {
    document.title = "Maintenance & Trade";
    addLeader("Henry Cornu", "President", "Henry_Cornu@uml.edu");
    addLeader("Mike Canfield", "Vice President", "Michael_Canfield@uml.edu");
    addLeader("John Byrne", "Treasurer", "John_Byrne@uml.edu");
    addLeader("David Maranda", "Chief Steward", "David_Maranda@uml.edu");
    addLeader("Sandra Timmons", "HK (North) Shop Steward", "Sandra_Timmons@uml.edu");
    addLeader("Steve Turcotte", "HK (South) Shop Steward", "Steve_Turcotte@uml.edu");
    addLink("Salary Tables", "mta_maintenance/salary_tables.pdf");
    addLink("Sick Buyback Form", "mta_maintenance/sick_buyback.pdf");
}

function mtaGrants() {
    document.title = "Grants & Contracts";
    addLeader("Scott Fulmer", "President", "Kitson Hall | (978) 934-4854 | Scott_Fulmer@uml.edu");
    addLeader("Shanna Thomson", "Vice President", "O'Leary Library | (978) 934-4641 | Shanna_Thomson@uml.edu");
    addLeader("Lynne Schaufenbil", "Recording Secretary", "Wannalancit Mills | Lynne_Schaufenbil@uml.edu");
    addLeader("Rebecca Gore", "Membership Secretary", "Kitson Hall | (978) 934-3276 | Rebecca_Gore@uml.edu");
    addLeader("Thomas Estabrook", "Grievance Secretary", "Wannalancit Mills | (978) 934-3397 | Thomas_Estabrook@uml.edu");
    addLeader("Mary Fadden", "Grace Area Representative", "Mary_Fadden@uml.edu");
    addLeader("Lois Heath", "Grace Area Representative", "Lois_Heath@uml.edu");
    addLeader("Phyllis Procter", "Grace Area Representative", "Phyllis_Procter@uml.edu");
    addLeader("Sandy Sun", "Grace Area Representative", "Sandy_Sun@uml.edu");
    addLeader("Cindy Bent", "Grace Area Representative", "Cynthia_Bent@uml.edu");
    addLeader("Therese O'Donnell", "Grace Area Representative", "Therese_ODonnell@uml.edu");
    addLink("Vacation Buyback Form", "mta_grants/vaca.pdf");
    addLink("Sick Buyback Form", "mta_grants/sick_buyback.pdf");
}

function uawGrad() {
    document.title = "Local 1596 UAW";
    addLeader("Erin Mangan Sullivan", "Graduate Employee Organization (GEO) President", "Erin_Sullivan@uml.edu");
    addLeader("John Lamb", "GEO Vice President", "John_Lamb@uml.edu");
    addLeader("Vikram Singh Prasher", "GEO Officer", "Vikramsingh_Prasher@uml.edu");
    addLeader("Andrew Downey", "GEO Officer", "Andrew_Downey@uml.edu");
    addLeader("Yao Zhai", "GEO Steward", "Yao_Zhai@uml.edu");
    addLeader("Debbie White", "Coordinator of Graduate Programs", "Deborah_White@uml.edu");
    addLink("Pay Scale", "uaw_grad/pay_scale.pdf");
    addLink("GEO Contract", "uaw_grad/contract.pdf");
}

function uawAdjunct() {
    document.title = "Adjunct Faculty";
    addLeader("Ellen Martins", "President", "Ellen_MichaudMartins@uml.edu");
    addLeader("James Moran", "Vice President", "James_Moran@uml.edu");
    addLeader("Tess George", "Secretary & Communications Director", "Teresa_George@uml.edu");
    addLink("Professional Development Guidelines", "uaw_adjunct/guidelines.pdf");
}

function nonUnit() {
    document.title = "Non-Unit Professionals";
    addLeader("Human Resources", "Main Contact", "HR@uml.edu");
    addLink("Professional Personnel Policy", "non_unit/policy.pdf");
    addLink("Salary Tables", "non_unit/salary_tables.pdf");
}

function getInfo() {
    if (localStorage.getItem('union') === "society_professors") {
        societyProfessors();
    }
    else if (localStorage.getItem('union') === "teamsters") {
        teamsters();
    }
    else if (localStorage.getItem('union') === "seiu") {
        seiu();
    }
    else if (localStorage.getItem('union') === "mta_classified") {
        mtaClassified();
    }
    else if (localStorage.getItem('union') === "mta_maintenance") {
        mtaMaintenance();
    }
    else if (localStorage.getItem('union') === "mta_grants") {
        mtaGrants();
    }
    else if (localStorage.getItem('union') === "uaw_grad") {
        uawGrad();
    }
    else if (localStorage.getItem('union') === "uaw_adjunct") {
        uawAdjunct();
    }
    else if (localStorage.getItem('union') === "non_unit") {
        nonUnit();
    }
    else {
        window.location = "../../home.html";
        alert("ERROR: Union " + localStorage.getItem("union") + " not recognized.");
        console.log("getInfo() function in more.js reached end of if statements.");
    }
}