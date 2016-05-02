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

function societyProfessors() {
    document.title = "Society of Professors";
    addLeader("Carol McDonough", "President", "Carol_McDonough@uml.edu");
    addLeader("Jay Simmons", "Vice President", "Jay_Simmons@uml.edu");
    addLeader("George Joseph", "Treasurer", "George_Joseph@uml.edu");
    addLeader("Carol Barry", "Secretary", "Carol_Barry@uml.edu");
    addLeader("Arnold O'Brien", "Grievance Coordinator", "Arnold_OBrien@uml.edu");
    addLeader("Levon Chorbajian", "Health and Welfare Representative", "Levon_Chorbajian@uml.edu");
}

function teamsters() {
    document.title = "University Police";
    addLeader("Jeff Connors", "Steward", "Jeffrey_Connors@uml.edu");
    addLeader("Scott Childs", "Steward", "Scott_Childs@uml.edu");
}

function seiu() {
    document.title = "SEIU Local 888";
    addLeader("Nicholas Piscitello", "President", "Nicholas_Piscitello@uml.edu");
    addLeader("Justin Lawler", "Vice President", "Justin_Lawler@uml.edu");
    addLeader("Penny Donoghue", "Chief Steward", "Pamela_Donoghue@uml.edu");
    addLeader("Ruairi O'Mahoney", "Treasurer", "Ruairi_OMahoney@uml.edu");
    addLeader("Susan Winning", "South Campus Area Representative", "Susan_Winning@uml.edu");
}

function mtaClassified() {
    document.title = "Classified & Technical";
    addLeader("Christos Protonotarios", "President, Treasurer, & Secretary", "Christos_Protonotarios@uml.edu");
    addLeader("James Rossi", "Chief Steward", "James_Rossi@uml.edu");
}

function mtaMaintenance() {
    document.title = "Maintenance & Trade";
    addLeader("Henry Cornu", "President", "Henry_Cornu@uml.edu");
    addLeader("Mike Canfield", "Vice President", "Michael_Canfield@uml.edu");
    addLeader("John Byrne", "Treasurer", "John_Byrne@uml.edu");
    addLeader("David Maranda", "Chief Steward", "David_Maranda@uml.edu");
    addLeader("Sandra Timmons", "HK (North) Shop Steward", "Sandra_Timmons@uml.edu");
    addLeader("Steve Turcotte", "HK (South) Shop Steward", "Steve_Turcotte@uml.edu");
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
}

function uawGrad() {
    document.title = "Local 1596 UAW";
    addLeader("Erin Mangan Sullivan", "Graduate Employee Organization (GEO) President", "Erin_Sullivan@uml.edu");
    addLeader("John_Lamb", "GEO Vice President", "John_Lamb@uml.edu");
    addLeader("Vikram Singh Prasher", "GEO Officer", "Vikramsingh_Prasher@uml.edu");
    addLeader("Andrew Downey", "GEO Officer", "Andrew_Downey@uml.edu");
    addLeader("Yao Zhai", "GEO Steward", "Yao_Zhai@uml.edu");
    addLeader("Debbie White", "Coordinator of Graduate Programs", "Deborah_White@uml.edu");
}

function uawAdjunct() {
    document.title = "Adjunct Faculty";
    addLeader("Ellen Martins", "President", "Ellen_MichaudMartins@uml.edu");
    addLeader("James Moran", "Vice President", "James_Moran@uml.edu");
    addLeader("Tess George", "Secretary & Communications Director", "Teresa_George@uml.edu");
}

function nonUnit() {
    document.title = "Non-Unit Professionals";
    addLeader("Human Resources", "Main Contact", "HR@uml.edu");
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