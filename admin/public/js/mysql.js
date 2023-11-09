getEmployees = (path, data) => {
    $.ajax({
        url: 'http://localhost:2812/api/mysql/employees/',
        type: 'GET',
        data: {...data},
        async: true,
        beforeSend: () => {
            $('.loading').show();
            $('.list').hide();
        },
        success: (data) => {
            const employees = data.map(employee => {
                return `<li class="list-group-item list-group-item-action">${employee.full_name} - ${employee.emp_no}</li>`;
            });

            if (employees.length === 0) {
                $('.list').html('<li class="list-group-item list-group-item-action text-center">Employee not found!</li>');
            } else {
                $('.list').html(employees);
            }
        },
        error: (error) => {
            console.log(error);
        },
        complete: () => {
            $('.loading').hide();
            $('.list').show();
        }
    });
}

$(document).ready(function () {
    $('#txt-keyword-mysql').keyup((e) => {
        const keyword = e.target.value;

        if (keyword.length === 0) {
            $('.loading').hide();
            $('.list').hide();
        } else {
            getEmployees('http://localhost:2812/api/mysql/employees', { keyword: e.target.value })
        }
    });
});
